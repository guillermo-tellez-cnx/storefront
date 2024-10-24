/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import {
  InLineAlert,
  Icon,
  Button,
  provider as UI,
} from '@dropins/tools/components.js';
import { events } from '@dropins/tools/event-bus.js';
import { initializers } from '@dropins/tools/initializer.js';
import * as PDP from '@dropins/storefront-pdp/api.js';
import { render as PDPProvider } from '@dropins/storefront-pdp/render.js';
import { addProductsToCart } from '@dropins/storefront-cart/api.js';

// Containers
import ProductHeader from '@dropins/storefront-pdp/containers/ProductHeader.js';
import ProductPrice from '@dropins/storefront-pdp/containers/ProductPrice.js';
import ProductShortDescription from '@dropins/storefront-pdp/containers/ProductShortDescription.js';
import ProductOptions from '@dropins/storefront-pdp/containers/ProductOptions.js';
import ProductQuantity from '@dropins/storefront-pdp/containers/ProductQuantity.js';
import ProductDescription from '@dropins/storefront-pdp/containers/ProductDescription.js';
import ProductAttributes from '@dropins/storefront-pdp/containers/ProductAttributes.js';
import ProductGallery from '@dropins/storefront-pdp/containers/ProductGallery.js';

// Libs
import {
  setJsonLd,
  loadErrorPage, performCatalogServiceQuery, variantsQuery,
  getSkuFromUrl,
  getOptionsUIDsFromUrl,
} from '../../scripts/commerce.js';
import { fetchPlaceholders } from '../../scripts/aem.js';
import { getConfigValue } from '../../scripts/configs.js';

export default async function decorate(block) {
  // Set Fetch Endpoint (Service)
  PDP.setEndpoint(await getConfigValue('commerce-endpoint'));

  // Set Fetch Headers (Service)
  PDP.setFetchGraphQlHeaders({
    'Content-Type': 'application/json',
    'Magento-Environment-Id': await getConfigValue('commerce-environment-id'),
    'Magento-Website-Code': await getConfigValue('commerce-website-code'),
    'Magento-Store-View-Code': await getConfigValue('commerce-store-view-code'),
    'Magento-Store-Code': await getConfigValue('commerce-store-code'),
    'Magento-Customer-Group': await getConfigValue('commerce-customer-group'),
    'x-api-key': await getConfigValue('commerce-x-api-key'),
  });

  // pre-fetch PDP data
  const sku = getSkuFromUrl();
  const optionsUIDs = getOptionsUIDsFromUrl();

  const [product, labels] = await Promise.all([
    PDP.fetchPDPData(sku, { optionsUIDs }),
    fetchPlaceholders(),
  ]);

  // Initialize
  initializers.register(PDP.initialize, {
    sku,
    optionsUIDs,
    langDefinitions: getLangDefinitions(labels),
    models: {
      ProductDetails: {
        initialData: product,
      },
    },
    acdl: true,
    persistURLParams: true,
  });

  if (!product) {
    await loadErrorPage();
    return Promise.reject();
  }

  // Layout
  const fragment = document.createRange().createContextualFragment(`
    <div class="product-details__wrapper">
      <div class="product-details__alert"></div>
      <div class="product-details__left-column">
        <div class="product-details__gallery"></div>
      </div>
      <div class="product-details__right-column">
        <div class="product-details__header"></div>
        <div class="product-details__price"></div>
        <div class="product-details__gallery"></div>
        <div class="product-details__short-description"></div>
        <div class="product-details__configuration">
          <div class="product-details__options"></div>
          <div class="product-details__quantity"></div>
          <div class="product-details__buttons">
            <div class="product-details__buttons__add-to-cart"></div>
            <div class="product-details__buttons__add-to-wishlist"></div>
          </div>
        </div>
        <div class="product-details__description"></div>
        <div class="product-details__attributes"></div>
      </div>
    </div>
  `);

  const $alert = fragment.querySelector('.product-details__alert');
  const $gallery = fragment.querySelector('.product-details__gallery');
  const $header = fragment.querySelector('.product-details__header');
  const $price = fragment.querySelector('.product-details__price');
  const $galleryMobile = fragment.querySelector('.product-details__right-column .product-details__gallery');
  const $shortDescription = fragment.querySelector('.product-details__short-description');
  const $options = fragment.querySelector('.product-details__options');
  const $quantity = fragment.querySelector('.product-details__quantity');
  const $addToCart = fragment.querySelector('.product-details__buttons__add-to-cart');
  const $addToWishlist = fragment.querySelector('.product-details__buttons__add-to-wishlist');
  const $description = fragment.querySelector('.product-details__description');
  const $attributes = fragment.querySelector('.product-details__attributes');

  block.appendChild(fragment);

  // Alert
  let inlineAlert = null;

  // Render Containers
  const [
    _galleryMobile,
    _gallery,
    _header,
    _price,
    _shortDescription,
    _options,
    _quantity,
    addToCart,
    addToWishlist,
    _description,
    _attributes,
  ] = await Promise.all([
    // Gallery (Mobile)
    PDPProvider.render(ProductGallery, {
      controls: 'dots',
      arrows: true,
      peak: true,
      gap: 'small',
      // TODO: there is a bug in the Carousel component that renders the wrong default image
      loop: false,
    })($galleryMobile),

    // Gallery (Desktop)
    PDPProvider.render(ProductGallery, {
      controls: 'thumbnailsColumn',
      arrows: true,
      peak: false,
      gap: 'small',
      // TODO: there is a bug in the Carousel component that renders the wrong default image
      loop: false,
    })($gallery),

    // Header
    PDPProvider.render(ProductHeader, {})($header),

    // Price
    PDPProvider.render(ProductPrice, {})($price),

    // Short Description
    PDPProvider.render(ProductShortDescription, {})($shortDescription),

    // Configuration - Swatches
    PDPProvider.render(ProductOptions, { hideSelectedValue: false })($options),

    // Configuration  Quantity
    PDPProvider.render(ProductQuantity, {})($quantity),

    // Configuration – Button - Add to Cart
    UI.render(Button, {
      children: labels.pdpProductAddtocart,
      icon: Icon({ source: 'Cart' }),
      onClick: async () => {
        try {
          addToCart.setProps((prev) => ({
            ...prev,
            children: labels.pdpCustomAddingtocart,
            disabled: true,
          }));

          // get the current selection values
          const values = PDP.getProductConfigurationValues();

          // add the product to the cart
          if (values) {
            await addProductsToCart([{ ...values }]);
          }

          // reset any previous alerts if successful
          inlineAlert?.remove();
        } catch (error) {
          // add alert message
          inlineAlert = await UI.render(InLineAlert, {
            heading: 'Error',
            description: error.message,
            icon: Icon({ source: 'Warning' }),
            'aria-live': 'assertive',
            role: 'alert',
            onDismiss: () => {
              inlineAlert.remove();
            },
          })($alert);

          // Scroll the alertWrapper into view
          $alert.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        } finally {
          addToCart.setProps((prev) => ({
            ...prev,
            children: labels.pdpProductAddtocart,
            disabled: false,
          }));
        }
      },
    })($addToCart),

    // Configuration - Add to Wishlist
    UI.render(Button, {
      icon: Icon({ source: 'Heart' }),
      variant: 'secondary',
      onClick: async () => {
        try {
          addToWishlist.setProps((prev) => ({ ...prev, disabled: true }));

          const values = PDP.getProductConfigurationValues();

          if (values?.sku) {
            const wishlist = await import('../../scripts/wishlist/api.js');
            await wishlist.addToWishlist(values.sku);
          }
        } catch (error) {
          console.error(error);
        } finally {
          addToWishlist.setProps((prev) => ({ ...prev, disabled: false }));
        }
      },
    })($addToWishlist),

    // Description
    PDPProvider.render(ProductDescription, {})($description),

    // Attributes
    PDPProvider.render(ProductAttributes, {})($attributes),
  ]);

  // Lifecycle Events
  events.on('pdp/valid', (valid) => {
    // update add to cart button disabled state based on product selection validity
    addToCart.setProps((prev) => ({ ...prev, disabled: !valid }));
  }, { eager: true });

  events.on('eds/lcp', () => {
    if (product) {
      // Set JSON-LD and Meta Tags
      setJsonLdProduct(product);
      setMetaTags(product);
      document.title = product.name;
    }
  }, { eager: true });

  return Promise.resolve();
}

async function setJsonLdProduct(product) {
  const {
    name,
    inStock,
    description,
    sku,
    urlKey,
    price,
    priceRange,
    images,
    attributes,
  } = product;
  const amount = priceRange?.minimum?.final?.amount || price?.final?.amount;
  const brand = attributes.find((attr) => attr.name === 'brand');

  // get variants
  const { variants } = (await performCatalogServiceQuery(variantsQuery, { sku }))?.variants
    || { variants: [] };

  const ldJson = {
    '@context': 'http://schema.org',
    '@type': 'Product',
    name,
    description,
    image: images[0]?.url,
    offers: [],
    productID: sku,
    brand: {
      '@type': 'Brand',
      name: brand?.value,
    },
    url: new URL(`/products/${urlKey}/${sku}`, window.location),
    sku,
    '@id': new URL(`/products/${urlKey}/${sku}`, window.location),
  };

  if (variants.length > 1) {
    ldJson.offers.push(...variants.map((variant) => ({
      '@type': 'Offer',
      name: variant.product.name,
      image: variant.product.images[0]?.url,
      price: variant.product.price.final.amount.value,
      priceCurrency: variant.product.price.final.amount.currency,
      availability: variant.product.inStock ? 'http://schema.org/InStock' : 'http://schema.org/OutOfStock',
      sku: variant.product.sku,
    })));
  } else {
    ldJson.offers.push({
      '@type': 'Offer',
      price: amount?.value,
      priceCurrency: amount?.currency,
      availability: inStock ? 'http://schema.org/InStock' : 'http://schema.org/OutOfStock',
    });
  }

  setJsonLd(ldJson, 'product');
}

function createMetaTag(property, content, type) {
  if (!property || !type) {
    return;
  }
  let meta = document.head.querySelector(`meta[${type}="${property}"]`);
  if (meta) {
    if (!content) {
      meta.remove();
      return;
    }
    meta.setAttribute(type, property);
    meta.setAttribute('content', content);
    return;
  }
  if (!content) {
    return;
  }
  meta = document.createElement('meta');
  meta.setAttribute(type, property);
  meta.setAttribute('content', content);
  document.head.appendChild(meta);
}

function setMetaTags(product) {
  if (!product) {
    return;
  }

  const price = product.prices.final.minimumAmount ?? product.prices.final.amount;

  createMetaTag('title', product.metaTitle || product.name, 'name');
  createMetaTag('description', product.metaDescription, 'name');
  createMetaTag('keywords', product.metaKeyword, 'name');

  createMetaTag('og:type', 'og:product', 'property');
  createMetaTag('og:description', product.shortDescription, 'property');
  createMetaTag('og:title', product.metaTitle || product.name, 'property');
  createMetaTag('og:url', window.location.href, 'property');
  const mainImage = product?.images?.filter((image) => image.roles.includes('thumbnail'))[0];
  const metaImage = mainImage?.url || product?.images[0]?.url;
  createMetaTag('og:image', metaImage, 'property');
  createMetaTag('og:image:secure_url', metaImage, 'property');
  createMetaTag('og:product:price:amount', price.value, 'property');
  createMetaTag('og:product:price:currency', price.currency, 'property');
}

function getLangDefinitions(labels) {
  return {
    default: {
      PDP: {
        Product: {
          Incrementer: { label: labels.pdpProductIncrementer },
          OutOfStock: { label: labels.pdpProductOutofstock },
          AddToCart: { label: labels.pdpProductAddtocart },
          Details: { label: labels.pdpProductDetails },
          RegularPrice: { label: labels.pdpProductRegularprice },
          SpecialPrice: { label: labels.pdpProductSpecialprice },
          PriceRange: {
            From: { label: labels.pdpProductPricerangeFrom },
            To: { label: labels.pdpProductPricerangeTo },
          },
          Image: { label: labels.pdpProductImage },
        },
        Swatches: {
          Required: { label: labels.pdpSwatchesRequired },
        },
        Carousel: {
          label: labels.pdpCarousel,
          Next: { label: labels.pdpCarouselNext },
          Previous: { label: labels.pdpCarouselPrevious },
          Slide: { label: labels.pdpCarouselSlide },
          Controls: {
            label: labels.pdpCarouselControls,
            Button: { label: labels.pdpCarouselControlsButton },
          },
        },
        Overlay: {
          Close: { label: labels.pdpOverlayClose },
        },
      },
      Custom: {
        AddingToCart: { label: labels.pdpCustomAddingtocart },
      },
    },
  };
}

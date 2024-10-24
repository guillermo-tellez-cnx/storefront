(function(a,e){try{if(typeof document<"u"){const r=document.createElement("style"),o=e.styleId;for(const d in e.attributes)r.setAttribute(d,e.attributes[d]);r.setAttribute("data-dropin",o),r.appendChild(document.createTextNode(a));const i=document.querySelector('style[data-dropin="sdk"]');if(i)i.after(r);else{const d=document.querySelector('link[rel="stylesheet"], style');d?d.before(r):document.head.append(r)}}}catch(r){console.error("dropin-styles (injectCodeFunction)",r)}})(`.dropin-orders-list-header{margin-bottom:var(--spacing-medium)}.dropin-orders-list ul{list-style:none;margin:0;padding:0}.dropin-orders-list--date-select{margin-bottom:var(--spacing-xbig)}.dropin-orders-list--date-select span{display:inline-block;font:var(--type-details-caption-1-font);letter-spacing:var(--type-details-caption-1-letter-spacing);margin-bottom:var(--spacing-xsmall)}.dropin-orders-list--date-select .dropin-picker{max-width:224px}
.dropin-form{display:grid;flex-direction:column;gap:var(--spacing-medium)}@media (min-width: 768px){.dropin-form{display:grid;grid-template-columns:repeat(2,1fr)}.dropin-form>.dropin-field:nth-child(1),.dropin-form>.dropin-field:nth-child(2){grid-column:span 1}.dropin-form>.dropin-field:nth-child(3),.dropin-form>.dropin-field:nth-child(4),.dropin-form>.dropin-field:nth-child(5){grid-column:span 2}.dropin-form>.dropin-field:nth-child(6),.dropin-form>.dropin-field:nth-child(7){grid-column:span 1}.dropin-form>.dropin-field:nth-child(8),.dropin-form>.dropin-field:nth-child(9){grid-column:span 1}.dropin-form>.dropin-field:nth-child(n+10){grid-column:span 2}}.dropin-form [class$=-hidden]{position:absolute;opacity:0;height:0;width:0;overflow:hidden;clip:rect(0,0,0,0)}.dropin-account-loaders--card-loader{margin-bottom:var(--spacing-small);border:var(--shape-border-width-1) solid var(--color-neutral-400);border-radius:var(--shape-border-radius-1)}.dropin-account-loaders--picker-loader div:first-child{max-width:200px}.dropin-account-loaders--picker-loader div:nth-child(3){max-width:400px}.dropin-address-card{border-radius:var(--shape-border-radius-1);margin-bottom:var(--spacing-small);border-width:var(--shape-border-width-1)}.dropin-address-card .dropin-card__content{display:grid;grid-template-columns:1fr auto;gap:var(--spacing-small) 0px;grid-template-areas:"description action" "labels action"}.dropin-address-card .dropin-address-card__action{display:flex;justify-content:flex-end;align-items:baseline;cursor:pointer;grid-area:action}.dropin-address-card .dropin-address-card__action--editbutton{margin-left:var(--spacing-small)}.dropin-address-card .dropin-address-card__action button{padding:0}.dropin-address-card .dropin-address-card__action button:hover{text-decoration:underline}.dropin-address-card .dropin-address-card__description{grid-area:description;margin:0;padding:0}.dropin-address-card .dropin-address-card__description p{font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing);color:var(--color-neutral-800);margin:0;padding:0;display:inline;overflow:hidden}.dropin-address-card .dropin-address-card__description p:nth-child(1),.dropin-address-card .dropin-address-card__description p:nth-child(2){margin:0 0 var(--spacing-small) 0;color:var(--color-neutral-800);font:var(--type-button-2-font);text-align:left;font-weight:500;cursor:default}.dropin-address-card__description p{margin-bottom:var(--spacing-small)}.dropin-address-card .dropin-address-card__description p:nth-child(1),.dropin-address-card .dropin-address-card__description p:nth-child(5),.dropin-address-card .dropin-address-card__description p:nth-child(7){float:left;width:auto;margin-right:var(--spacing-xsmall)}.dropin-address-card .dropin-address-card__description p:nth-child(2),.dropin-address-card .dropin-address-card__description p:nth-child(6),.dropin-address-card .dropin-address-card__description p:nth-child(8){display:inline;width:50%}.dropin-address-card .dropin-address-card__description p:nth-child(2):after,.dropin-address-card .dropin-address-card__description p:nth-child(6):after,.dropin-address-card .dropin-address-card__description p:nth-child(8):after{content:"\\a";white-space:pre;display:block;height:var(--spacing-small)}.dropin-address-card .dropin-address-card__description p:nth-child(3),.dropin-address-card .dropin-address-card__description p:nth-child(4),.dropin-address-card .dropin-address-card__description p:nth-child(n+9){display:block;width:100%;margin-bottom:var(--spacing-small)}.dropin-address-card .dropin-address-card__labels{display:flex;gap:0 var(--spacing-xsmall);grid-area:labels}.dropin-actions-address{cursor:pointer;padding:var(--spacing-xsmall) var(--spacing-medium);border-radius:var(--shape-border-radius-1);border:var(--shape-border-width-1) solid var(--color-neutral-400);background-color:var(--color-neutral-50);width:100%;height:88px;display:flex;align-items:center;justify-content:space-between}.dropin-actions-address--title{font:var(--type-button-2-font);letter-spacing:var(--type-button-2-letter-spacing)}.dropin-actions-address svg{stroke:var(--shape-icon-stroke-4);color:var(--color-neutral-800)}.dropin-address-modal{position:relative;padding:var(--spacing-xbig) var(--spacing-xxbig) var(--spacing-xxbig) var(--spacing-xxbig);width:100%;margin:auto;max-width:721px}.dropin-modal__body--medium>.dropin-modal__header-title,.dropin-modal__body--full>.dropin-modal__header-title,.dropin-address-modal .dropin-modal__content{margin:0;align-items:center}.dropin-address-modal .dropin-modal__header-title-content h3{font:var(--type-headline-1-font);letter-spacing:var(--type-headline-1-letter-spacing);margin:0;padding:0}.dropin-address-modal .dropin-address-modal__spinner{position:absolute;top:0;left:0;background-color:var(--color-neutral-200);opacity:.8;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:1}.dropin-address-modal p{color:var(--color-neutral-800);font:var(--type-body-2-strong-font);letter-spacing:var(--type-body-2-strong-letter-spacing);margin-bottom:var(--spacing-medium)}.dropin-address-modal .dropin-address-modal__wrapper--buttons{display:flex;align-items:center;justify-content:right;gap:0 var(--spacing-small)}.dropin-empty-list{margin-bottom:var(--spacing-small);border:var(--shape-border-width-1) solid var(--color-neutral-400);border-radius:var(--shape-border-radius-1)}.dropin-empty-list.dropin-empty-list--minified,.dropin-empty-list .dropin-card{border:none}.dropin-empty-list .dropin-card__content{gap:0;padding:var(--spacing-xxbig)}.dropin-empty-list.dropin-empty-list--minified .dropin-card__content{flex-direction:row;align-items:center;padding:var(--spacing-big) var(--spacing-small)}.dropin-empty-list .dropin-card__content svg{width:64px;height:64px;margin-bottom:var(--spacing-medium)}.dropin-empty-list.dropin-empty-list--minified .dropin-card__content svg{margin:0 var(--spacing-small) 0 0;width:32px;height:32px}.dropin-empty-list .dropin-card__content svg path{fill:var(--color-neutral-800)}.dropin-empty-list.dropin-empty-list--minified .dropin-card__content svg path{fill:var(--color-neutral-500)}.dropin-empty-list .dropin-card__content p{font:var(--type-headline-1-font);letter-spacing:var(--type-headline-1-letter-spacing);color:var(--color-neutral-800)}.dropin-empty-list.dropin-empty-list--minified .dropin-card__content p{font:var(--type-body-1-strong-font);color:var(--color-neutral-800)}.dropin-orders-list-action{margin:0;padding:0;border:none;background-color:transparent;cursor:pointer;text-decoration:none}.dropin-orders-list-action--minifiedView{width:100%;text-align:left;font:var(--type-body-1-default-font)}.dropin-orders-list-action.dropin-orders-list-action--minifiedView:hover{text-decoration:none}.dropin-orders-list-action--minifiedView .dropin-orders-list-action__card-wrapper{display:flex;justify-content:space-between;align-items:center;color:var(--color-neutral-800);height:calc(88px - var(--spacing-small) * 2)}.dropin-orders-list-action__card-wrapper>p{font:var(--type-button-2-font);letter-spacing:var(--type-button-2-letter-spacing)}.dropin-orders-list-action__card-wrapper svg,.dropin-orders-list-action svg{color:var(--color-neutral-800)}.dropin-orders-list-action--minifiedView .dropin-card--secondary{border-width:var(--shape-border-width-1);border-radius:var(--shape-border-radius-1)}.dropin-orders-list-action--minifiedView .dropin-card__content{padding:var(--spacing-small) var(--spacing-medium)}.dropin-orders-list-action--minifiedView p{font:var(--type-body-1-strong-font)}.dropin-orders-list-card{height:100%;margin-bottom:var(--spacing-small);border-width:var(--shape-border-width-1);border-radius:var(--shape-border-radius-1)}.dropin-orders-list-card .dropin-card__content{padding:var(--spacing-medium);display:grid;grid-template-areas:"content actions" "imageList actions";gap:0;max-height:100%}.dropin-orders-list-card .dropin-orders-list-card--content{grid-area:content;margin-bottom:var(--spacing-small)}.dropin-orders-list-card--content--quantity{font-weight:500;color:var(--color-neutral-800)}.dropin-orders-list-card--content--track_number{font:var(--type-body-1-strong-font);letter-spacing:var(--type-body-1-strong-letter-spacing);cursor:pointer}.dropin-orders-list-card .dropin-orders-list-card--content>div:first-child{font-weight:500}.dropin-orders-list-card .dropin-orders-list-card--content p,.dropin-orders-list-card .dropin-orders-list-card--content div{padding:0;text-align:left;font:var(--type-body-1-default-font);margin-bottom:var(--spacing-small);color:var(--color-neutral-800)}.dropin-orders-list-card p.dropin-orders-list-card--content--product-name{margin:0}.dropin-orders-list-card .dropin-orders-list-card--content p:last-child{margin:0}.dropin-orders-list-card .dropin-orders-list-card--content div{font:var(--type-button-2-font);margin-bottom:var(--spacing-small)}.dropin-orders-list-card .dropin-orders-list-card--actions{grid-area:actions}.dropin-orders-list-card .dropin-orders-list-card--images{overflow:auto}.dropin-orders-list-card .dropin-orders-list-card--images .dropin-content-grid__content{grid-template-columns:repeat(6,max-content)!important}.dropin-orders-list-card .dropin-orders-list-card--images-3 .dropin-content-grid__content{grid-template-columns:repeat(3,max-content)!important}.dropin-orders-list-card .dropin-orders-list-card--images img{object-fit:contain;width:65px;height:65px}.dropin-orders-list-card .dropin-orders-list-card--actions{position:relative;align-self:center;margin-left:auto}@media (min-width: 768px){.dropin-orders-list-card.dropin-orders-list-card--full .dropin-card__content{max-height:100%}}.dropin-addresses-header{margin-bottom:var(--spacing-medium)}.dropin-addresses-wrapper{box-sizing:border-box;position:relative}.dropin-addresses-wrapper .dropin-addresses__footer .dropin-card--secondary{border:var(--shape-border-width-1) solid var(--color-neutral-400);border-radius:var(--shape-border-radius-1)}.dropin-addresses-wrapper--select-view{position:relative;margin:0;padding:0;border:none}.dropin-addresses-wrapper--select-view input[type=radio]{position:absolute;clip:rect(0,0,0,0);width:1px;height:1px;padding:0;margin:-1px;border:0;overflow:hidden}.dropin-addresses-wrapper--select-view .dropin-addresses-wrapper--label{cursor:pointer;display:block;border-radius:0}.dropin-addresses-wrapper--select-view .dropin-addresses-wrapper--label .dropin-address-card{border-radius:0}.dropin-addresses-wrapper--select-view .dropin-addresses-wrapper--label:nth-child(2){border-radius:var(--shape-border-radius-1) var(--shape-border-radius-1) 0 0}.dropin-addresses-wrapper--select-view>.dropin-addresses-wrapper--label:nth-child(2)>.dropin-address-card{border-radius:var(--shape-border-radius-1) var(--shape-border-radius-1) 0 0}.dropin-addresses-wrapper--select-view>.dropin-addresses-wrapper--label:last-child,.dropin-addresses-wrapper--select-view>.dropin-addresses-wrapper--label:last-child>.dropin-actions-address.dropin-actions-address--address{border-radius:0 0 var(--shape-border-radius-1) var(--shape-border-radius-1)}.dropin-addresses-wrapper--select-view .dropin-addresses-wrapper--label .dropin-address-card,.dropin-addresses-wrapper--select-view .dropin-addresses-wrapper--label .dropin-actions-address.dropin-actions-address--address{background-color:var(--color-neutral-200)}.dropin-addresses-wrapper--select-view input[type=radio]:checked+.dropin-addresses-wrapper--label>.dropin-address-card{border:var(--shape-border-width-1) solid var(--color-neutral-900);position:relative}.dropin-addresses-wrapper--select-view input[type=radio]:checked+.dropin-addresses-wrapper--label>.dropin-addresses-form__footer__wrapper{border:var(--shape-border-width-1) solid var(--color-neutral-900);position:relative}.dropin-addresses-wrapper--select-view input[type=radio]:checked+.dropin-addresses-wrapper--label .dropin-address-card,.dropin-addresses-wrapper--select-view input[type=radio]:checked+.dropin-addresses-wrapper--label .dropin-actions-address.dropin-actions-address--address{background-color:var(--color-neutral-50)}.dropin-addresses-wrapper--select-view .dropin-address-card{margin:0}.dropin-addresses-wrapper--select-view .dropin-addresses-form__footer__wrapper{padding:var(--spacing-medium)}.dropin-address-form-wrapper{box-sizing:border-box;background-color:var(--color-neutral-50)}.dropin-address-form-wrapper--notification{margin-bottom:var(--spacing-medium)}.dropin-address-form-wrapper--title{color:var(--color-neutral-800);font:var(--type-headline-2-strong-font);letter-spacing:var(--type-headline-2-strong-letter-spacing);margin-bottom:var(--spacing-medium)}.dropin-address-form-wrapper--buttons{display:flex;align-items:center;justify-content:end;gap:0 var(--spacing-medium);margin-top:var(--spacing-medium)}.dropin-address-form-wrapper--buttons button{min-width:142px}`,{styleId:"account"});
import{jsx as r}from"@dropins/tools/preact-jsx-runtime.js";import{Render as i}from"@dropins/tools/lib.js";import{useState as o,useEffect as n}from"@dropins/tools/preact-hooks.js";import{UIProvider as l}from"@dropins/tools/components.js";import{events as m}from"@dropins/tools/event-bus.js";const c={minifiedView:{Addresses:{containerTitle:"Addresses",editAddressFormTitle:"Edit address",differentAddressFormTitle:"Deliver to new address",viewAllAddressesButton:"View address list",differentAddressButton:"Use a different address",addressCard:{actionRemove:"Remove",actionEdit:"Edit",cardLabelShipping:"Shipping",cardLabelBilling:"Billing",defaultLabelText:"DEFAULT"},removeAddressModal:{title:"Remove address",description:"Are you sure you would like to remove this address?",actionCancel:"Cancel",actionConfirm:"Remove"}},OrdersList:{containerTitle:"Recent orders",viewAllOrdersButton:"View all orders",ariaLabelLink:"Redirect to full order information",OrdersListCard:{orderNumber:"Order number:",itemsAmount:"items",carrier:"Carrier:",orderDate:"Placed on"},OrdersListSelectDate:{pastSixMonths:"Past 6 months",currentYear:"Current year",viewAll:"View all"}},EmptyList:{Addresses:{message:"No saved addresses"},OrdersList:{message:"No orders"}}},fullSizeView:{Addresses:{containerTitle:"Addresses",editAddressFormTitle:"Edit address",differentAddressFormTitle:"Deliver to new address",newAddressFormTitle:"Add address",addNewAddressButton:"Create new",differentAddressButton:"Use a different address",addressCard:{actionRemove:"Remove",actionEdit:"Edit",cardLabelShipping:"Shipping",cardLabelBilling:"Billing",defaultLabelText:"DEFAULT"},removeAddressModal:{title:"Remove address",description:"Are you sure you would like to remove this address?",actionCancel:"Cancel",actionConfirm:"Remove"}},OrdersList:{containerTitle:"Your orders",ariaLabelLink:"Redirect to full order information",OrdersListCard:{orderNumber:"Order number:",itemsAmount:"items",carrier:"Carrier:",orderDate:"Placed on"},OrdersListSelectDate:{pastSixMonths:"Past 6 months",currentYear:"Current year",viewAll:"View all"}},EmptyList:{Addresses:{message:"No saved addresses"},OrdersList:{message:"No orders"}}},AddressForm:{formText:{secondaryButton:"Cancel",primaryButton:"Save",defaultShippingLabel:"Set as default shipping address",defaultBillingLabel:"Set as default billing address",saveAddressBook:"Save in address book"}},FormText:{requiredFieldError:"This is a required field.",numericError:"Only numeric values are allowed.",alphaNumWithSpacesError:"Only alphanumeric characters and spaces are allowed.",alphaNumericError:"Only alphanumeric characters are allowed.",alphaError:"Only alphabetic characters are allowed.",emailError:"Please enter a valid email address.",dateError:"Please enter a valid date.",dateLengthError:"Date must be between {min} and {max}.",urlError:"Please enter a valid URL, e.g., http://www.adobe.com.",lengthTextError:"Text length must be between {min} and {max} characters."}},u={Account:c},f={default:u},p=({children:s})=>{const[d,a]=o("en_US");return n(()=>{const e=m.on("locale",t=>{a(t)},{eager:!0});return()=>{e==null||e.off()}},[]),r(l,{lang:d,langDefinitions:f,children:s})},g=new i(r(p,{}));export{g as render};

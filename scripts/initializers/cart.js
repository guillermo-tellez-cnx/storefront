/* eslint-disable import/no-cycle */
import { initializers } from '@dropins/tools/initializer.js';
import * as cart from '@dropins/storefront-cart/api.js';
import { initializeDropin } from './index.js';

initializeDropin(async () => {
  await initializers.mountImmediately(cart.initialize, {});

  // eslint-disable-next-line no-console
  console.log('🟢 Cart Dropin Initialized');
})();

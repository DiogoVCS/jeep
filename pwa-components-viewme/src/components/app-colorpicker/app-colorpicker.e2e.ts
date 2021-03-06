import { newE2EPage, E2EElement } from '@stencil/core/testing';

describe('app-colorpicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-colorpicker></app-colorpicker>');

    const element:E2EElement = await page.find('app-colorpicker');
    expect(element).toHaveClass('hydrated');
  });

});

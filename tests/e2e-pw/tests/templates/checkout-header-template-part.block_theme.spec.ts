/**
 * External dependencies
 */
import { test, expect } from '@woocommerce/e2e-playwright-utils';

const permalink = '/checkout';
const templatePath = 'woocommerce/woocommerce//checkout-header';
const templateType = 'wp_template_part';

test.afterAll( async ( { requestUtils } ) => {
	await requestUtils.deleteAllTemplates( 'wp_template' );
	await requestUtils.deleteAllTemplates( 'wp_template_part' );
} );

test.describe( 'Test the checkout header template part', async () => {
	test( 'Template can be opened in the site editor', async ( { page } ) => {
		await page.goto( '/wp-admin/site-editor.php' );
		await page.click( 'text=Template Parts' );
		await page.click( 'text=Checkout Header' );

		const editButton = page.getByRole( 'button', { name: /Edit/i } );
		await expect( editButton ).toBeVisible();
	} );

	test( 'Template can be modified', async ( { page, admin, editor } ) => {
		await admin.visitSiteEditor( {
			postId: templatePath,
			postType: templateType,
		} );
		await editor.canvas.click( 'body' );
		await editor.canvas.waitForLoadState( 'networkidle' );
		await editor.insertBlock( {
			name: 'core/paragraph',
			attributes: { content: 'Hello World' },
		} );
		await editor.saveSiteEditorEntities();

		await page.goto( permalink );

		await expect( page.getByText( 'Hello World' ).first() ).toBeVisible();
	} );
} );

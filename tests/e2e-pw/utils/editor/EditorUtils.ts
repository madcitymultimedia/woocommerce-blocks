/**
 * External dependencies
 */
import { Editor } from '@wordpress/e2e-test-utils-playwright';
import { Page } from '@playwright/test';
/**
 * Internal dependencies
 */

export class EditorUtils {
	editor: Editor;
	page: Page;
	constructor( editor: Editor, page: Page ) {
		this.editor = editor;
		this.page = page;
	}

	async getBlockByName( name: string ) {
		return this.editor.canvas.locator( `[data-type="${ name }"]` );
	}

	/**
	 * Toggles the global inserter.
	 */
	async toggleGlobalBlockInserter() {
		// "Add block" selector is required to make sure performance comparison
		// doesn't fail on older branches where we still had "Add block" as label.
		await this.page.click(
			'.edit-post-header [aria-label="Add block"],' +
				'.edit-site-header [aria-label="Add block"],' +
				'.edit-post-header [aria-label="Toggle block inserter"],' +
				'.edit-site-header [aria-label="Toggle block inserter"],' +
				'.edit-widgets-header [aria-label="Add block"],' +
				'.edit-widgets-header [aria-label="Toggle block inserter"],' +
				'.edit-site-header-edit-mode__inserter-toggle'
		);
	}

	/**
	 * Checks if the global inserter is open.
	 *
	 * @return {Promise<boolean>} Whether the inserter is open or not.
	 */
	async isGlobalInserterOpen() {
		return await this.page.evaluate( () => {
			// "Add block" selector is required to make sure performance comparison
			// doesn't fail on older branches where we still had "Add block" as
			// label.
			return !! document.querySelector(
				'.edit-post-header [aria-label="Add block"].is-pressed,' +
					'.edit-site-header-edit-mode [aria-label="Add block"].is-pressed,' +
					'.edit-post-header [aria-label="Toggle block inserter"].is-pressed,' +
					'.edit-site-header [aria-label="Toggle block inserter"].is-pressed,' +
					'.edit-widgets-header [aria-label="Toggle block inserter"].is-pressed,' +
					'.edit-widgets-header [aria-label="Add block"].is-pressed,' +
					'.edit-site-header-edit-mode__inserter-toggle.is-pressed'
			);
		} );
	}

	/**
	 * Opens the global inserter.
	 */
	async openGlobalBlockInserter() {
		if ( ! ( await this.isGlobalInserterOpen() ) ) {
			await this.toggleGlobalBlockInserter(); // Waiting here is necessary because sometimes the inserter takes more
			// time to render than Puppeteer takes to complete the 'click' action.

			await this.page.waitForSelector( '.block-editor-inserter__menu' );
		}
	}
}

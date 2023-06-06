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
}

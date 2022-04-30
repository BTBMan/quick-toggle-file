import * as vscode from 'vscode';
import { FilesQueue } from './FilesQueue';

export function activate(context: vscode.ExtensionContext) {
  const lastFiles = new FilesQueue(context);

  // exec command
  context.subscriptions.push(
    vscode.commands.registerCommand('vscode-ext-demo.toggle', () => {
      const prevFileUri = lastFiles.prevFile.document.uri;

      console.log(prevFileUri.path);

      vscode.workspace.openTextDocument(prevFileUri);
    }),
  );

  // active text editor change
  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor((e) => {
      if (!e) {
        return;
      }

      console.log('trigger change active text editor!');

      lastFiles.prevFile = e;
    }),
  );
}

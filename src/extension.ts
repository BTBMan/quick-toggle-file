import * as vscode from 'vscode';
import { FilesQueue } from './FilesQueue';

export function activate(context: vscode.ExtensionContext) {
  const filesQueue = new FilesQueue(context);

  // exec command
  context.subscriptions.push(
    vscode.commands.registerCommand('quickToggleFile.toggle', () => {
      const prevFileDocument = filesQueue.prevFile.document;

      vscode.workspace.openTextDocument(prevFileDocument.uri).then((doc) => {
        vscode.window.showTextDocument(
          prevFileDocument,
          filesQueue.prevFile.viewColumn,
        );
      });
    }),
  );

  // active text editor change
  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor((e) => {
      if (!e) {
        return;
      }

      console.log('trigger change active text editor!');

      filesQueue.prevFile = e;
    }),
  );
}

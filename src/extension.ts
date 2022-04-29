import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // console.log('context', context.workspaceState.keys());
  // console.log('vscode', vscode);

  let disposable = vscode.commands.registerCommand('vscode-ext-demo.toggle', () => {
    // console.log('context', context.workspaceState.keys());
    // const fuzzySearch = new FuzzySearch(context);
    // vscode.window.showInformationMessage('toggle file');
    vscode.commands.executeCommand('workbench.action.quickOpen');
    setTimeout(() => {
      vscode.commands.executeCommand('workbench.action.quickOpenNavigateNextInEditorPicker');

      setTimeout(() => {
        vscode.commands.executeCommand('workbench.action.acceptSelectedQuickOpenItem');
      }, 0);
    }, 0);
  });

  context.subscriptions.push(disposable);
}

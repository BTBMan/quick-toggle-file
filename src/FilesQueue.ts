import * as vscode from 'vscode';

interface Options {
  maxLength: number;
}

const defaultFiles = vscode.window.activeTextEditor;

export class FilesQueue {
  static readonly stateKey = 'storedFiles';
  private storedFiles: any[];
  private maxLength: Options['maxLength'];
  private workspaceState: vscode.Memento;

  constructor(context: vscode.ExtensionContext, opt?: Options) {
    this.workspaceState = context.workspaceState;
    this.storedFiles = this.workspaceState.get<vscode.TextEditor[]>(
      FilesQueue.stateKey,
      defaultFiles ? [defaultFiles] : [],
    );
    this.maxLength = opt?.maxLength || 2;
  }

  private shift() {
    this.storedFiles.shift();
  }

  private push(val: vscode.TextEditor) {
    this.storedFiles.push(val);
  }

  private updataState() {
    this.workspaceState.update(FilesQueue.stateKey, this.storedFiles);
  }

  get prevFile() {
    return this.storedFiles[0];
  }

  set prevFile(val: vscode.TextEditor) {
    if (this.storedFiles.length >= this.maxLength) {
      this.shift();
    }

    this.push(val);

    this.updataState();
  }
}

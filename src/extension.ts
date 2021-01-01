import * as path from 'path';
import * as chrome_launcher from 'chrome-launcher';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // register a command that show VSCode camera feed in Chrome window.
  context.subscriptions.push(
    vscode.commands.registerCommand( 'vscode-camera', () => {
        chrome_launcher.launch({
          chromeFlags: [
            `--app=file:///${path.join(context.extensionPath, 'camera', 'camera.html').replace('\\', '/')}`
          ]
        });
      }
    )
  );
}


# Myrc
Set of components, directive and pipe for Angular
  
>This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Install

Once the package is installed, import `MyrcLibModule` into your application.
```ts
@NgModule({
  ...
  imports: [MyrcLibModule],
  ...
})
export class AppModule { }
```

## Component

## Directive

  ### myrcContentEditable
  >Directive that enable edition of any html innertext balise
  
||Name|Description|
|-|-|-|
|@Input(): string, @Output: string|myrcContentEditable|default value|
|@Input(): string|editableplaceholder|value if no default value set|
|@Input(): string[]|keysban|key press event to disable|
|@Output|options|allowed value on edition|

```html
<div [(myrcContentEditable)]="test" 
	editableplaceholder="key" 
	[keysban]="bannedKey" 
	[options]="allowedValue"></div>
```
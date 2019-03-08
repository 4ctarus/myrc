
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
You can also import a default theme.

## Component
### MyrcFormbuilder
>transform an object to FormGroup and editable form, 

||Name|Description|
|-|-|-|
|@Input(): FormGroup, @Output: FormGroup|fg|set your empty formgroup|
|@Input(): Form|forms|set your form options|

```html
<form [formGroup]="fg" (ngSubmit)="onSubmit()">
  <myrc-formbuilder [(fg)]="fg" 
    [forms]="forms"></myrc-formbuilder>
  <button type="submit"></button>
</form>
```

## Directive
### myrcEditable
  >Directive that enable edition of any html innertext balise
  
||Name|Description|
|-|-|-|
|@Input(): string, @Output: string|editable|default value|
|@Input(): string|editableplaceholder|value if no default value set|
|@Input(): string[]|keysban|key press event to disable|
|@Output|options|allowed value on edition|

```html
<div myrcEditable [(editable)]="test" 
  editableplaceholder="key" 
  [keysban]="bannedKey" 
  [options]="allowedValue"></div>
```
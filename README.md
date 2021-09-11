
# Demo:

## https://unruffled-swanson-bab331.netlify.app/

# Formulario responsivo y con validaciones.

## Librerías usadas:
  - Sass: se utilizó para hacer uso de sus fuciones como el nesting, los mixins, y los modulos para una mejor organización de los estilos.

## Estructura de carpetas:

- src/ 
	- components/ : carpeta de componentes. 
	- Sass/ : carpeta de archivos .scss 
	- hooks/ : hooks creados
	- helpers/ : carpeta de código auxiliar como la function validate() que se utiliza para hacer las validaciones y el objeto regex que contiene las expresiones regulares con las que se llevan acabo dichas validaciones.

## UX

Todas las validaciones realizadas se ejecutan en el evento onBlur  del input (cuando quita el foco del input) para darle rápidamente feedback al usuario y que pueda corregir sus datos no válidos enseguida.

Mientras que el usuario no corrija los datos no válidos no podrá presionar el botón que "guarda" los datos, esto obliga al usuario a corregir los datos ingresados.

## UI

La UI del formulario es simple pero efectiva, dándole al usuario confianza a la hora de que ingrese sus datos.

El usuario puede detectar rápidamente donde se encuentra en el formulario ya que la UI resalta el input en el que se encuentra haciendo focus con un color fácilmente configurable y una animación sencilla y moderna de su respectivo label.

Para el layaout se utilizo como base el sistema de layout flexbox para darle una gran resposividad al formulario para cualquier ancho de pantalla convencional. También se creó el componente GridContainerWrapper para aplicar el sistema de layout grid a sus componentes hijos y poder crear columnas fácilmente y hacer el formulario más atractivo.

## Descripción:

Lo que iba a ser un formulario enorme se dividió en varios componentes formularios diferentes para que el usuario no se sintiera abrumado llenando un solo formulario tan extenso, dichos formularios independientes se encuentran dentro de su respectivo componente FormContainer que les proporciona los mismos estilos.

Se dividieron todos los datos requeridos en cinco categorías dando lugar a cinco formularios diferentes, estos componentes formularios son: BasicInfoForm, AddressForm, LegalRepresentativeForm, BankForm y BeneficiaryForm. 

Como todos los formularios iban a hacer uso de dos variables de estado diferentes, la primera es el objeto form{} que contiene los datos que ingresa el usuario en cada formulario, y la segunda el objeto de errors{} que guarda los errores que cometiera el usuario al momento de ir llenando el formulario y cambiar el foco del input que es cuando se realiza la validación del input, se creó un hook que crea estas dos variables de estado diferentes para cada formulario así como también las funciones que se ejecutarían en el evento onChange y onSubmit de cada input/formulario ya que siempre ejecutarían el mismo código independientemente del formulario.

Cada formulario cuenta con 2-3 componentes diferentes dependiendo el formulario, estos son: CustomInput, CustomSelect y SaveButton.

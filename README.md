<h1 align='center'>
  React DataTable 
</h1>

<div align='center'>

[![npm version](https://img.shields.io/npm/v/oc_react_datatable.svg?style=flat-square)](https://www.npmjs.org/package/oc_react_datatable)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/oc_react_datatable.svg?style=flat-square)](https://npm-stat.com/charts.html?package=oc_react_datatable)

<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img alt="SASS" src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"/>
<br>

</div>

Source code in node_modules src directory<br>
Scroll for french README<br>

PropTypes.<br>
Sass/Scss in node modules.<br>

`npm i oc_react_datatable`

<strong>Mocked Headers and Data at the bottom of the page.</strong>



DataTable is a versatile React component designed to display, sort, search, and paginate data in an intuitive and customizable way.<br>
It uses React hooks to manage state and effects, offering a smooth user experience even with large amounts of data.<br><br>

<h3>Features</h3>
<strong>Dynamic data display</strong>: Capable of displaying data in tabular form with custom headers.<br>
<strong>Sorting</strong>: Supports ascending and descending sorting based on any column.<br>
<strong>Search</strong>: Full-text or column-specific search with debounce to enhance performance.<br>
<strong>Pagination</strong>: Flexible pagination options allowing users to navigate through paginated data. Input for Jump to page ...<br>
<strong>Customization</strong>: Supports customization of sort and pagination icons, as well as style prefix for CSS customization.<br>
<strong>Performance</strong>: Uses Suspense and lazy for deferred loading, thus optimizing rendering performance.<br>
<strong>Responsiveness</strong>: Adapted to mobile devices and various screen sizes with X scroll.<br><br>


<h3>Usage</h3>
After installation, you can import and use DataTable in your React project:

```jsx
import React from 'react';
import DataTable from 'oc_react_datatable';
import 'oc_react_datatable/dist/assets/index.css'; 

const App = () => {
  const data = [...]; 
  const headers = [...];
  const stylePrefix = 'MyOwnStyle';

  return (
    <DataTable
      stylePrefix={stylePrefix}
      data={data}
      headers={headers}
      itemsPerPage={5}
      {...}
    />
  );
};

export default App;
```
<br>


<h3>Props</h3>

DataTable accepts several props for maximum customization and flexibility:

<strong>stylePrefix :</strong> Class prefix for styling.<br>

<strong>data :</strong> An array of data to display.<br>

<strong>headers :</strong> An array of objects representing the table headers.<br>

<strong>itemsPerPage :</strong> Number of items to display per page by default.<br>

<strong>itemsSearchSelectValue :</strong> column search options (headers).<br>

<strong>arrayOfItemsPerPage :</strong> An array defining the options for the number of items per page available via select.<br>

<strong>onEditRequest, onChange, onPageChanged, onResetData :</strong> Callback functions for various events.<br>

<strong>enableResetSettings, resetAfterSearch :</strong> Booleans to enable the reset settings button (sort, itemsPerPage, etc.) and reset settings after a search.<br>

<strong>IconLeft, IconRight, IconAsc, IconDesc :</strong> Components to customize icons.<br>

<strong>unformatedData:</strong> Booleans for formatted or unformatted data.<br><br>


<h3>Props Types</h3>

| Props                   | Type                                              | Default                 |
| :---------------------- | :------------------------------------------------ | :---------------------- |
| stylePrefix             | PropTypes.string                                  | "data-table_default"    |
| headers                 | PropTypes.arrayOf(PropTypes.object)               | [ ]                      |
| data                    | PropTypes.arrayOf(PropTypes.object)               | [ ]                      |
| itemsPerPage            | PropTypes.number                                  | 5                       |
| arrayOfItemsPerPage     | PropTypes.arrayOf(PropTypes.number)               | [1, 5, 10, 50, 100]     |
| onEditRequest           | PropTypes.func                                    |                         |
| onChange                | PropTypes.func                                    |                         |
| onPageChanged           | PropTypes.func                                    |                         |
| onResetData             | PropTypes.func                                    |                         |
| enableResetSettings     | PropTypes.bool                                    | true                    |
| resetAfterSearch        | PropTypes.bool                                    | false                   |
| IconLeft                | PropTypes.func                                    |                         |
| IconRight               | PropTypes.func                                    |                         |
| IconAsc                 | PropTypes.func                                    |                         |
| IconDesc                | PropTypes.func                                    |                         |
| itemsSearchSelectValue  | PropTypes.string                                  | "all"                   |
| unformatedData          | PropTypes.bool                                    | false                   |

<br>


<h3>Styles</h3>
You can customize the appearance of DataTable by using the stylePrefix and defining your own CSS rules.<br> <strong>default stylePrefix: 'data-table_default'</strong><br><br>


<h3>License</h3>
DataTable is distributed under the MIT license. Feel free to use, modify, and redistribute it under the terms of this license.
<br><br><br>



/////////////////////////////////////////////// FRENCH /////////////////////////////////////////////


DataTable est un composant React polyvalent conçu pour afficher, trier, rechercher et paginer des données de manière intuitive et personnalisable.<br>
Il utilise les hooks React pour gérer l'état et les effets, offrant une expérience utilisateur fluide même avec de grandes quantités de données.<br><br>

<h3>Fonctionnalités</h3>
<strong>Affichage dynamique des données</strong>: Capable d'afficher des données sous forme tabulaire avec des en-têtes personnalisés.<br>
<strong>Triage</strong>: Prise en charge du tri ascendant et descendant basé sur n'importe quelle colonne.<br>
<strong>Recherche</strong>: Recherche de texte intégrale ou spécifique à une colonne avec délai d'attente pour améliorer les performances.<br>
<strong>Pagination</strong>: Options de pagination flexibles permettant aux utilisateurs de naviguer à travers les données paginées. Input for Jump to page ...<br>
<strong>Personnalisation</strong>: Supporte la personnalisation des icônes de tri et de pagination, ainsi que le préfixe de style pour la personnalisation CSS.<br>
<strong>Performances</strong>: Utilisation de Suspense et lazy pour un chargement différé, optimisant ainsi les performances du rendu.<br>
<strong>Réactivité</strong>: Adapté aux dispositifs mobiles et aux différentes tailles d'écran avec scroll X.<br><br>


<h3>Utilisation</h3>
Après l'installation, vous pouvez importer et utiliser DataTable dans votre projet React :

```jsx
import React from 'react';
import DataTable from 'oc_react_datatable';
import 'oc_react_datatable/dist/assets/index.css'; 

const App = () => {
  const data = [...]; 
  const headers = [...];
  const stylePrefix = 'MyOwnStyle';

  return (
    <DataTable
      stylePrefix={stylePrefix}
      data={data}
      headers={headers}
      itemsPerPage={5}
      {...}
    />
  );
};

export default App;
```
<br>


<h3>Props</h3>

DataTable accepte plusieurs props pour une personnalisation et une flexibilité maximales :

<strong>stylePrefix :</strong> Prefix de class pour le style.<br>

<strong>data :</strong> Un tableau des données à afficher.<br>

<strong>headers :</strong> Un tableau d'objets représentant les en-têtes du tableau.<br>

<strong>itemsPerPage :</strong> Nombre d'éléments à afficher par page par defaut.<br>

<strong>itemsSearchSelectValue :</strong> options de recherche par colone (headers).<br>

<strong>arrayOfItemsPerPage :</strong> Un tableau définissant les options de nombre d'éléments par page disponibles via le select.<br>

<strong>onEditRequest, onChange, onPageChanged, onResetData :</strong> Des fonctions callback pour divers événements.<br>

<strong>enableResetSettings, resetAfterSearch :</strong> Booléens pour activer le bouton de réinitialisation des settings (sort, itemsPerPage etc...) et la réinitialisation settings après une recherche.<br>

<strong>IconLeft, IconRight, IconAsc, IconDesc :</strong> Composants pour personnaliser les icônes.<br>

<strong>unformatedData:</strong> Booléens pour données formatées ou non.<br><br>


<h3>Props Types</h3>

| Props                   | Type                                              | Default                 |
| :---------------------- | :------------------------------------------------ | :---------------------- |
| stylePrefix             | PropTypes.string                                  | "data-table_default"    |
| headers                 | PropTypes.arrayOf(PropTypes.object)               | [ ]                      |
| data                    | PropTypes.arrayOf(PropTypes.object)               | [ ]                      |
| itemsPerPage            | PropTypes.number                                  | 5                       |
| arrayOfItemsPerPage     | PropTypes.arrayOf(PropTypes.number)               | [1, 5, 10, 50, 100]     |
| onEditRequest           | PropTypes.func                                    |                         |
| onChange                | PropTypes.func                                    |                         |
| onPageChanged           | PropTypes.func                                    |                         |
| onResetData             | PropTypes.func                                    |                         |
| enableResetSettings     | PropTypes.bool                                    | true                    |
| resetAfterSearch        | PropTypes.bool                                    | false                   |
| IconLeft                | PropTypes.func                                    |                         |
| IconRight               | PropTypes.func                                    |                         |
| IconAsc                 | PropTypes.func                                    |                         |
| IconDesc                | PropTypes.func                                    |                         |
| itemsSearchSelectValue  | PropTypes.string                                  | "all"                   |
| unformatedData          | PropTypes.bool                                    | false                   |

<br>

<h3>Styles</h3>
Vous pouvez personnaliser l'apparence de DataTable en utilisant le préfixe stylePrefix et en définissant vos propres règles CSS.<br> <strong>stylePrefix par default: 'data-table_default'</strong><br><br>


<h3>Licence</h3>
DataTable est distribué sous la licence MIT. N'hésitez pas à l'utiliser, le modifier et le redistribuer selon les termes de cette licence.


<h3>Mocked</h3>

```jsx
<DataTable stylePrefix="data-table_default" data={arrayOfEmployeesDataContents} headers={arrayOfEmployeesDataTitle}/>
```

<strong>Headers:</strong>

```js
const arrayOfEmployeesDataTitle = [
  {key: "firstName", value: "FirstName",},
  {key: "lastName", value: "LastName",},
  {key: "startDate",value: "StartDate", type: "date",},
  {key: "department", value: "Department",},
  {key: "dateOfBirth", value: "Date Of Birth", type: "date",},
  {key: "street", value: "Street", type: 'street'},
  {key: "city", value: "City",},
  {key: "state", value: "State",},
  {key: "zipCode", value: "ZipCode", type: 'number'},
]
```

<strong>Data:</strong>

```js
const arrayOfEmployeesDataContents = [
  {'firstName': 'Diane', 'lastName': 'Pierce', 'startDate': '11/09/2021', 'department': 'IT', 'dateOfBirth': '23/01/1981', 'street': '017 Harris Plain', 'city': 'North Sharon', 'state': 'NC', 'zipCode': '12492'},
  {'firstName': 'Craig', 'lastName': 'Roth', 'startDate': '01/06/2021', 'department': 'HR', 'dateOfBirth': '08/07/1954', 'street': '7119 Leslie Spurs', 'city': 'Port Susanchester', 'state': 'FL', 'zipCode': '74557'},
  {'firstName': 'Robert', 'lastName': 'Hinton', 'startDate': '17/04/2023', 'department': 'Finance', 'dateOfBirth': '02/03/1960', 'street': '927 John Meadows Suite 900', 'city': 'Suzannemouth', 'state': 'ME', 'zipCode': '14054'},
  {'firstName': 'Sabrina', 'lastName': 'Bartlett', 'startDate': '08/08/2023', 'department': 'Sales', 'dateOfBirth': '13/09/1983', 'street': '4417 John Stream Apt. 613', 'city': 'Port Karenside', 'state': 'NJ', 'zipCode': '04007'},
  {'firstName': 'Robin', 'lastName': 'Harris', 'startDate': '10/08/2023', 'department': 'Sales', 'dateOfBirth': '10/09/2004', 'street': '6873 Aaron Brooks Suite 398', 'city': 'New Haley', 'state': 'NM', 'zipCode': '98604'},
  {'firstName': 'Jacob', 'lastName': 'Ferguson', 'startDate': '04/03/2021', 'department': 'Marketing', 'dateOfBirth': '27/07/1970', 'street': '8839 Savannah Drive', 'city': 'Fordland', 'state': 'NE', 'zipCode': '10910'},
  {'firstName': 'Elizabeth', 'lastName': 'Freeman', 'startDate': '07/03/2022', 'department': 'Marketing', 'dateOfBirth': '18/10/2002', 'street': '820 James Falls Apt. 989', 'city': 'Brendamouth', 'state': 'AZ', 'zipCode': '69873'},
  {'firstName': 'Edward', 'lastName': 'Alexander', 'startDate': '28/10/2019', 'department': 'HR', 'dateOfBirth': '21/11/1991', 'street': '97823 Sullivan Fall', 'city': 'Martinshire', 'state': 'CT', 'zipCode': '84721'},
  {'firstName': 'Danielle', 'lastName': 'Greene', 'startDate': '14/08/2022', 'department': 'Marketing', 'dateOfBirth': '23/06/1964', 'street': '98382 Martin Motorway', 'city': 'Port Mark', 'state': 'MT', 'zipCode': '40863'},
  {'firstName': 'Jackson', 'lastName': 'Miller', 'startDate': '28/07/2023', 'department': 'IT', 'dateOfBirth': '06/01/1981', 'street': '36178 Hutchinson Neck', 'city': 'Stephensville', 'state': 'WA', 'zipCode': '42809'},
  {'firstName': 'Frank', 'lastName': 'Mcgee', 'startDate': '26/05/2020', 'department': 'Marketing', 'dateOfBirth': '28/01/1969', 'street': '44554 Berry Street Apt. 553', 'city': 'Port George', 'state': 'NH', 'zipCode': '07130'},
  {'firstName': 'Monica', 'lastName': 'Harvey', 'startDate': '06/04/2020', 'department': 'Finance', 'dateOfBirth': '16/05/1995', 'street': '5063 Kathy Mountains Apt. 673', 'city': 'Michealtown', 'state': 'NY', 'zipCode': '37448'},
  {'firstName': 'Dawn', 'lastName': 'Powell', 'startDate': '29/08/2022', 'department': 'HR', 'dateOfBirth': '20/01/1959', 'street': '065 Pineda Stravenue', 'city': 'Port Stacy', 'state': 'SC', 'zipCode': '13038'},
  {'firstName': 'Thomas', 'lastName': 'Larson', 'startDate': '22/05/2022', 'department': 'IT', 'dateOfBirth': '29/01/1986', 'street': '2334 Daniel Walks Suite 348', 'city': 'Lake Christopher', 'state': 'MI', 'zipCode': '79260'},
  {'firstName': 'David', 'lastName': 'Morton', 'startDate': '23/05/2021', 'department': 'Marketing', 'dateOfBirth': '26/11/1961', 'street': '75272 Debbie Common Suite 641', 'city': 'Melendezbury', 'state': 'WY', 'zipCode': '91022'},
  {'firstName': 'Alyssa', 'lastName': 'Lyons', 'startDate': '01/06/2022', 'department': 'Finance', 'dateOfBirth': '23/06/2002', 'street': '596 Browning Lakes', 'city': 'Ortizbury', 'state': 'VA', 'zipCode': '37625'},
]
```
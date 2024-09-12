```javascript
import 'bootstrap';

const dashboard = document.createElement('div');
dashboard.classList.add('container-fluid');

const row = document.createElement('div');
row.classList.add('row');

// Ajoutez vos éléments de dashboard ici

dashboard.appendChild(row);

document.body.appendChild(dashboard);
```
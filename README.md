# Universidad Surcolombiana - Programación de Dispositivos Móviles
## Unidad 3: Desarrollo Móvil Multiplataforma (Ionic 8 + Angular 18)
### Semana 10: Interacción y Formularios Móviles (Preparación Corte 3 - 20%)

Este proyecto contiene la implementación de referencia del laboratorio de la Semana 10, diseñado con componentes táctiles optimizados, validación reactiva de formularios y controladores de retroalimentación visual.

---

## 🚀 Requisitos Previos

- **Node.js**: v18+ o superior (recomendado v20+ / v22+ / v24+)
- **NPM**: v9+ o superior

---

## 🛠️ Instalación y Compilación

1. **Instalar dependencias del proyecto:**
   ```bash
   npm install
   ```

2. **Ejecutar el servidor de desarrollo móvil:**
   ```bash
   npx ionic serve
   # O alternativamente:
   npm start
   ```

   La aplicación se abrirá en `http://localhost:8100/`. Se recomienda abrir las **Herramientas de Desarrollador (F12)** y activar el modo de emulación de dispositivo móvil (iPhone 14 / Pixel 7).

3. **Compilar para producción:**
   ```bash
   npm run build
   ```

4. **Ejecutar pruebas unitarias:**
   ```bash
   npm test
   ```

---

## 📱 Componentes y Conceptos Implementados

1. **`ion-input`**: Campo de texto flotante con atributos `type`, `placeholder` y `clearInput`.
2. **`ion-select` & `ion-select-option`**: Selector táctil desplegable con interfaz nativa móvil.
3. **`ion-toggle`**: Interruptor booleano para suscripción a notificaciones SMS.
4. **`ion-checkbox`**: Casilla de confirmación obligatoria para términos y condiciones.
5. **Two-Way Data Binding (`[(ngModel)]`)**: Sincronización bidireccional entre la vista HTML y el objeto TypeScript `formData`.
6. **`ToastController`**: Notificación emergente (`danger`) cuando faltan campos obligatorios.
7. **`AlertController`**: Ventana modal de confirmación con el resumen de los datos capturados.
8. **`ion-modal`**: Modal flotante con el reglamento y términos del laboratorio, controlado mediante `isTermsModalOpen`.
9. **Theming USCO**: Paleta institucional de la Universidad Surcolombiana (`#800020` Vinotinto y `#C59B27` Ocre/Dorado).

---

## 🏛️ Estructura del Proyecto

```
usco-ionic-forms-lab/
├── angular.json
├── ionic.config.json
├── package.json
├── tsconfig.json
└── src/
    ├── global.scss
    ├── index.html
    ├── main.ts
    ├── theme/
    │   └── variables.scss          # Paleta institucional USCO
    └── app/
        ├── app.component.html
        ├── app.component.ts
        ├── app.routes.ts
        ├── models/
        │   └── booking-request.model.ts  # Tipado estricto
        ├── services/
        │   └── feedback.service.ts       # Desacoplamiento de Toasts/Alerts (Clean Architecture)
        └── home/
            ├── home.page.html            # Plantilla con componentes Ionic
            ├── home.page.scss            # Estilos del formulario e inspector
            ├── home.page.spec.ts         # Pruebas unitarias de validación
            └── home.page.ts              # Lógica y controlador
```

---


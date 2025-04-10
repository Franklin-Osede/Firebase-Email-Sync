# Actualización de Email en Firebase

Este proyecto contiene un script para actualizar el email de un usuario en Firebase Authentication y Firestore.

## Requisitos previos

1. Node.js instalado
2. Cuenta y proyecto en Firebase
3. Archivo de credenciales de servicio de Firebase Admin SDK

## Instrucciones de uso

### 1. Instalar dependencias

```bash
npm install firebase-admin
```

### 2. Configurar el archivo serviceAccountKey.json

Descarga el archivo de claves privadas de tu proyecto Firebase:
- Ve a la Consola de Firebase > Configuración del proyecto > Cuentas de servicio
- Haz clic en "Generar nueva clave privada"
- Guarda el archivo JSON descargado como `serviceAccountKey.json` en el directorio del proyecto

Alternativamente, puedes incluir las credenciales directamente en el código como se muestra en el script de ejemplo.

### 3. Configurar los emails

Edita el script `update-email.js` para configurar:
- El email antiguo (`oldEmail`)
- El email nuevo (`newEmail`)
- Opcionalmente, puedes establecer `emailVerified: true` para que no se requiera verificación

### 4. Ejecutar el script

```bash
node update-email.js
```

## Detalles del script

El script `update-email.js` realiza dos operaciones principales:

1. Actualiza el email del usuario en Firebase Authentication
2. Actualiza el email en todos los documentos de la colección 'users' que contengan el email antiguo

## Resultado

Después de ejecutar el script:
- El usuario podrá iniciar sesión con el nuevo email usando la misma contraseña
- El email antiguo ya no será válido para iniciar sesión
- La verificación del nuevo email puede ser configurada (por defecto puede establecerse como ya verificado)
- Todos los datos y documentos asociados al usuario se mantienen intactos 
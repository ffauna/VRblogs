---
layout: ../layouts/PostLayout.astro
title: "Interacción con Mandos en Realidad Extendida (XR)"
date: 2024-10-27
author: "Flora Viegas Peñalosa"
tags: ["XR", "interacción", "mandos", "desarrollo"]
---

La interacción con mandos es un aspecto crucial en el desarrollo de experiencias de Realidad Extendida (XR), ya que permite a los usuarios interactuar con el entorno virtual de manera intuitiva y precisa. En este post, abordaremos los conceptos clave para integrar y optimizar las interacciones con mandos en proyectos XR.

<div>
  <img src="/assets/controllers_xr.svg" class="sm:w-1/2 mx-auto" alt="controllers illustration">
</div>

## Conceptos Básicos de Interacción con Mandos

### 1. **Input de los Mandos**
   Los mandos XR generalmente tienen múltiples botones, joysticks y sensores de presión. Para que una aplicación pueda leer y reaccionar a las acciones del usuario, es esencial mapear los controles de manera adecuada. Algunos de los principales inputs que se manejan son:
   - **Joystick o touchpad**: Usado para locomotion (movimiento) dentro del entorno.
   - **Botones de acción**: Para seleccionar, agarrar, o activar elementos.
   - **Sensores de presión**: Detectan la intensidad con que el usuario sujeta el mando, útil para gestos de presión y agarre.

### 2. **Tipos de Interacción**

   La interacción con mandos puede clasificarse en dos categorías principales:

   - **Interacción directa**: El usuario selecciona objetos o menús directamente apuntando con el mando y haciendo clic en un botón.
   - **Interacción basada en gestos**: Detecta gestos específicos que el usuario realiza con el mando, como apuntar, girar, o mover el mando en una dirección particular.

### 3. **Locomotion Movement**
   Este sistema permite al usuario desplazarse dentro del entorno virtual utilizando el joystick del mando. Algunas de las técnicas populares de locomotion incluyen:
   - **Movimiento continuo**: Simula el caminar o correr, adecuado para grandes entornos.
   - **Teletransporte**: Permite al usuario moverse a puntos específicos del escenario sin provocar sensación de mareo (motion sickness).
   - **Rotación mediante joystick**: Permite al usuario girar el punto de vista sin mover físicamente la cabeza, ideal para ajustes rápidos de perspectiva.

### 4. **Grabbing (Agarrar) y Manipulación de Objetos**
   El usuario puede interactuar con los objetos del entorno XR, tomándolos y manipulándolos. Esto se logra mediante:
   - **Detección de colisión**: El sistema detecta cuando el mando entra en contacto con un objeto que se puede manipular.
   - **Gestión de agarre**: Una vez detectada la colisión, el usuario puede presionar un botón para “tomar” el objeto, y soltarlo presionando nuevamente.
   - **Agarre avanzado**: Algunos mandos XR detectan la presión del usuario, permitiendo una variación en el agarre y manipulación según la fuerza aplicada.

## Buenas Prácticas de Implementación

- **Optimización de la sensibilidad del joystick**: Ajustar la sensibilidad es clave para una experiencia fluida y cómoda, sobre todo en usuarios nuevos.
- **Feedback háptico**: Los mandos XR suelen contar con motores de vibración que, configurados adecuadamente, proporcionan retroalimentación al usuario para aumentar la sensación de realismo.
- **Pruebas de usuario**: Realizar pruebas frecuentes con usuarios es esencial para detectar y corregir aspectos de la interacción que puedan resultar confusos o incómodos.

## Conclusión

La interacción con mandos es esencial en el desarrollo de aplicaciones XR, pues permite una conexión intuitiva entre el usuario y el entorno virtual. Al implementar técnicas como locomotion y manipulación de objetos, junto con un adecuado feedback háptico, puedes crear experiencias más inmersivas y naturales.

¿Te gustaría profundizar en algún otro aspecto de la interacción XR? ¡Déjanos tus preguntas en los comentarios!

---

Este post proporciona una visión general de cómo implementar interacciones básicas usando mandos en entornos XR, y está pensado como una guía inicial para nuevos desarrolladores en el grupo de IA Inmersiva. 


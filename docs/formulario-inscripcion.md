# Formulario de inscripción (Google Forms)

> **Estado:** el formulario ya está creado y publicado, y embebido en `/inscripcion/`
> (`registerFormUrl` / `registerFormEmbedUrl` en `src/data/site.ts`). Este documento queda
> como referencia del contenido y para futuras ediciones.

Especificación para crear el Google Form de inscripción de la OCIA. Está basada en los
campos que pide la inscripción de la **ONIA (Brasil)** en la plataforma *Olímpico EduSpace*
(`olimpico.eduspace.com.br/users/sign_up`), adaptada a Chile.

La ONIA pide, al inscribirse: **nombre completo**, **categoría/prueba**, **e-mail**,
**estado**, **municipio** y **escuela**. La cédula y el certificado de alumno regular se
piden después, en la Fase 3 (no en la inscripción).

## Configuración del formulario

- **Título:** Inscripción · Olimpiada Chilena de Inteligencia Artificial (OCIA) 2026
- **Descripción:** La inscripción es gratuita. Está abierta a estudiantes de 7° básico a
  4° medio y a docentes / público general en la Categoría Libre. Al enviar este formulario
  declaras haber leído y aceptado el reglamento y la política de privacidad de la OCIA.
- Ajustes → "Recopilar direcciones de correo" (opcional; igual pedimos el correo abajo).
- Ajustes → mostrar barra de progreso.
- Usar **secciones** para no pedir datos de apoderado a mayores de edad.

## Preguntas

### Sección 1 — Datos del o la participante

| # | Pregunta | Tipo | Obligatoria | Opciones / notas |
|---|----------|------|-------------|------------------|
| 1 | Nombre completo | Respuesta corta | Sí | |
| 2 | Correo electrónico | Respuesta corta | Sí | Validación: texto de correo electrónico |
| 3 | Categoría | Selección múltiple | Sí | `Enseñanza Básica (7° u 8° básico)` · `Enseñanza Media (1° a 4° medio)` · `Categoría Libre (docentes y público general)` |
| 4 | Curso actual (2026) | Desplegable | No * | `7° básico` … `4° medio`. *Obligatoria solo para Básica/Media — ver "ir a la sección según la respuesta" en la pregunta 3, o dejarla opcional. |
| 5 | Fecha de nacimiento | Fecha | No | Útil para verificar categoría; ONIA no lo pide al inscribir. |
| 6 | RUT | Respuesta corta | No | Se validará con la cédula en la Fase 3. |
| 7 | Región | Desplegable | Sí | Las 16 regiones de Chile (ver lista abajo). |
| 8 | Comuna | Respuesta corta | Sí | |
| 9 | Establecimiento educacional | Respuesta corta | Sí | Colegio / liceo. Para Categoría Libre: institución o "No aplica". |
| 10 | Teléfono de contacto | Respuesta corta | No | |
| 11 | ¿Cómo te enteraste de la OCIA? | Selección múltiple | No | `Mi colegio / un/a docente` · `Redes sociales` · `Sociedad Chilena de Programación Competitiva` · `Un/a amigo/a` · `Otro` |

### Sección 2 — Apoderado/a (solo si el o la participante es menor de edad)

| # | Pregunta | Tipo | Obligatoria |
|---|----------|------|-------------|
| 12 | Nombre del padre, madre o apoderado/a | Respuesta corta | Sí |
| 13 | Correo del apoderado/a | Respuesta corta (validación correo) | Sí |
| 14 | Teléfono del apoderado/a | Respuesta corta | No |
| 15 | Autorizo la participación de mi pupilo/a en la OCIA y el tratamiento de sus datos según la política de privacidad | Casillas | Sí |

### Sección 3 — Declaraciones (todos)

| # | Pregunta | Tipo | Obligatoria |
|---|----------|------|-------------|
| 16 | He leído y acepto el reglamento de la OCIA | Casillas | Sí |
| 17 | Acepto la política de privacidad y el tratamiento de mis datos con fines de la olimpiada | Casillas | Sí |
| 18 | Quiero recibir novedades de la OCIA por correo | Casillas | No |

## Regiones de Chile (para el desplegable)

Arica y Parinacota · Tarapacá · Antofagasta · Atacama · Coquimbo · Valparaíso ·
Metropolitana de Santiago · Libertador General Bernardo O'Higgins · Maule · Ñuble ·
Biobío · La Araucanía · Los Ríos · Los Lagos · Aysén del General Carlos Ibáñez del Campo ·
Magallanes y de la Antártica Chilena

## Después de crear el formulario

1. **Enlace corto:** botón *Enviar* → icono de enlace → "Acortar URL" → copiar
   (`https://forms.gle/…`). Pégalo en `registerFormUrl` en `src/data/site.ts`.
2. **Enlace para insertar:** botón *Enviar* → `<>` → copiar el valor de `src="…"` del iframe
   (`https://docs.google.com/forms/d/e/…/viewform?embedded=true`). Pégalo en
   `registerFormEmbedUrl`.
3. Al reemplazar ambos valores, la página `/inscripcion/` muestra el formulario embebido
   automáticamente.

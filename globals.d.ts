/**
 * Sass/CSS
 */
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss'

/**
 * Images
 */
declare module '*.jpg'
declare module '*.png'
declare module '*.svg'

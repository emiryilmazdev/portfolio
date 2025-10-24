// Temporary type fixes for React 18 compatibility issues

declare module 'react-syntax-highlighter' {
  import { Component } from 'react';
  
  export interface SyntaxHighlighterProps {
    language?: string;
    style?: any;
    customStyle?: any;
    PreTag?: string;
    wrapLongLines?: boolean;
    children?: React.ReactNode;
    [key: string]: any;
  }
  
  export class PrismLight extends Component<SyntaxHighlighterProps> {
    static registerLanguage(name: string, language: any): void;
  }
  
  export class Prism extends Component<SyntaxHighlighterProps> {}
}

declare module 'react-slick' {
  import { Component } from 'react';
  
  export interface Settings {
    dots?: boolean;
    arrows?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    cssEase?: string;
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
  }
  
  export default class Slider extends Component<Settings> {
    slickPlay(): void;
    slickPause(): void;
    innerSlider?: {
      list?: HTMLElement;
    };
  }
}
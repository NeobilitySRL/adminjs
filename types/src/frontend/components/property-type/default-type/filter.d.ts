import React, { ReactNode } from 'react';
import { ThemeProps, DefaultTheme } from 'styled-components';
import { FilterPropertyProps } from '../base-property-props';
declare class Filter extends React.PureComponent<FilterPropertyProps & ThemeProps<DefaultTheme>> {
    constructor(props: any);
    handleInputChange(event: any): void;
    handleSelectChange(selected: any): void;
    renderInput(): ReactNode;
    render(): ReactNode;
}
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<any, string | number | symbol> & React.RefAttributes<Filter>, string | number | symbol> & {
    theme?: DefaultTheme | undefined;
}>;
export default _default;

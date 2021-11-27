import React, { FC } from 'react';
import styled from '@emotion/styled';

import { Legend, LegendProps } from './Legend';
import { GameName, GameNameProps } from './GameName';

export type TopComponentType = LegendProps & GameNameProps;

export const Top: FC<TopComponentType> = ({ children, ...LegendProps }) => (
	<Header>
		<GameName>{children}</GameName>
		<Legend {...LegendProps} />
	</Header>
);

const Header = styled.header`
	text-align: center;
	position: relative;
	display: inline-block;
`;

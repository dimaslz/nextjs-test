import Link from 'next/link';
import { forwardRef, MouseEvent } from 'react';

interface LinkContainerProps {
	onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
	href?: string;
	children?: React.ReactNode;
	className?: string | undefined;
}

const LinkContainer = forwardRef<HTMLAnchorElement, LinkContainerProps>(
	({ onClick, href, children, className }, ref) => (
		<a href={href} onClick={onClick} ref={ref} className={className}>
			{children}
		</a>
	),
);

interface LocaleLinkProps {
	href?: string | object;
	locale: string;
	className?: string | undefined;
	onClick: (v?: any) => void;
	children: React.ReactNode;
}

const LocaleLink = ({
	href = '',
	locale,
	className,
	onClick,
	children
}: LocaleLinkProps) => (<>
	<Link href={href} locale={locale} legacyBehavior passHref>
		<LinkContainer onClick={() => onClick(locale)} className={className}>
			{children}
		</LinkContainer>
	</Link>
</>);

export default LocaleLink;
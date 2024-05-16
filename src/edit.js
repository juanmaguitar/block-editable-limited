import { useBlockProps, RichText } from '@wordpress/block-editor';

const Edit = ( props ) => {
	const {
		attributes: { content },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeContent = ( newContent ) => {
		if ( newContent.length > 10 ) {
			return;
		}
		setAttributes( { content: newContent } );
	};
	return (
		<RichText
			{ ...blockProps }
			tagName="p"
			onChange={ onChangeContent }
			value={ content }
		/>
	);
};
export default Edit;
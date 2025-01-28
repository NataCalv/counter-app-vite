import PropTypes from 'prop-types';

export const FirstApp = ( {title = 'No hay título', subTitle = 'No hay subtítulo'} ) => {
    return (
        <>
            <h1>{ title }</h1>
            <p>{subTitle}</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

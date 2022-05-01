import React  from "react";

const PostLoading = (Component) => (({isLoading, ...props}) => {
        if (!isLoading) return <Component {...props} />;
        return (
            <p style={{fontSize: '25px'}}>
                We are waiting for the data to load!...
            </p>
        );
    }
);

export default PostLoading;
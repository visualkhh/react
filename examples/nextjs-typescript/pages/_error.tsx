import {ErrorProps} from "next/error";
import {AppInitialProps} from "next/app";
import {NextPageContext} from "next/dist/shared/lib/utils";

function Error({ statusCode }: ErrorProps) {
    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'}
        </p>
    )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
// ============== LOGIN ============== //
// ============== LOGIN ============== //
export type LOGIN_REQUEST_TYPE = {
    email: string,
    password: string
}

export type LOGIN_RESPONSE_TYPE = {
    timestamp: Date | string,
    success: boolean,
    error_code: string,
    data: {
        token_type: string,
        access_token: string,
        expire_in: number
    } | null,
    error: {
        error_message: string,
        field: string,
        value: string
    }[] | null | string,
}
// ============== LOGIN ============== //
// ============== LOGIN ============== //


// ============== VERIFY TOKEN ============== //
// ============== VERIFY TOKEN  ============== //
export type VERIFYTOKEN_REQUEST_TYPE = {
    token_type: string,
    access_token: string
}

export type VERIFYTOKEN_RESPONSE_TYPE = {
    timestamp: Date | string,
    success: boolean,
    error_code: string,
    data: {
        name: string | null,
        email: string | null,
        email_verified: boolean,
        have_image: boolean,
        image_url: string,
        status: string,
        role: string,
        oauth: {
            google: {
                connected: boolean,
                name?: string,
                picture?: string|null
            },
            line: {
                connected: boolean,
                name?: string,
                picture?: string|null
            },
        }
        session_id: string
    } | null,
    error: null | string,
}
// ============== VERIFY TOKEN  ============== //
// ============== VERIFY TOKEN  ============== //

// ============ REGISTER ============ //
// ============ REGISTER ============ //
export type REGISTER_REQUEST_TYPE = {
    name: string,
    email: string,
    password: string
}

export type REGISTER_RESPONSE_TYPE = {
    timestamp: Date | string,
    success: boolean,
    error_code: string,
    data: string | null,
    error: {
        error_message: string,
        field: string,
        value: string
    }[] | null | string,
}
// ============ REGISTER ============ //
// ============ REGISTER ============ //

// ============ FORGOT ============ //
// ============ FORGOT ============ //
export type FORGOT_REQUEST_TYPE = {
    email: string,
}

export type FORGOT_RESPONSE_TYPE = {
    timestamp: Date | string,
    success: boolean,
    error_code: string,
    data: string| null,
    error: {
        error_message: string,
        field: string,
        value: string
    }[] | null | string,
}
// ============ FORGOT ============ //
// ============ FORGOT ============ //


// ============ RESET ============ //
// ============ RESET ============ //
export type RESET_REQUEST_TYPE = {
    session_id: string,
    password: string,
}

export type RESET_RESPONSE_TYPE = {
    timestamp: Date | string,
    success: boolean,
    error_code: string,
    data: string| null,
    error: {
        error_message: string,
        field: string,
        value: string
    }[] | null | string,
}
// ============ RESET ============ //
// ============ RESET ============ //


// ============== CONNECT LINE ============== //
// ============== CONNECT LINE ============== //
export type CONNECT_LINE_RESPONSE_TYPE = {
    timestamp: Date | string,
    success: boolean,
    error_code: string,
    data: {
        auth_url: string
    } | null,
    error: {
        error_message: string,
        field: string,
        value: string
    }[] | null | string,
}
// ============== CONNECT LINE ============== //
// ============== CONNECT LINE ============== //

// ============== CONNECT GOOGLE ============== //
// ============== CONNECT GOOGLE ============== //
export type CONNECT_GOOGLE_RESPONSE_TYPE = {
    timestamp: Date | string,
    success: boolean,
    error_code: string,
    data: {
        auth_url: string
    } | null,
    error: {
        error_message: string,
        field: string,
        value: string
    }[] | null | string,
}
// ============== CONNECT GOOGLE ============== //
// ============== CONNECT GOOGLE ============== //


// ============== DISCONNECT GOOGLE ============== //
// ============== DISCONNECT GOOGLE ============== //
export type DISCONNECT_SOCIAL_RESPONSE_TYPE = {
    timestamp: Date | string,
    success: boolean,
    error_code: string,
    data: string | null,
    error: {
        error_message: string,
        field: string,
        value: string
    }[] | null | string,
}
// ============== DISCONNECT GOOGLE ============== //
// ============== DISCONNECT GOOGLE ============== //


// ============== OAUTH SOCIAL ============== //
// ============== OAUTH SOCIAL ============== //
export type OAUTH_SOCIAL_REQUEST_TYPE = {
    user_id: string
}

export type OAUTH_SOCIAL_RESPONSE_TYPE = {
    timestamp: Date | string,
    success: boolean,
    error_code: string,
    data: {
        token_type: string,
        access_token: string,
        expire_in: number
    } | null,
    error: {
        error_message: string,
        field: string,
        value: string
    }[] | null | string,
}
// ============== OAUTH SOCIA ============== //
// ============== OAUTH SOCIA ============== //
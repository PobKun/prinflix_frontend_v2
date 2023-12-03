// ============== CHANGE PASSWORD ============== //
// ============== CHANGE PASSWORD ============== //
export type CHANGEPASSOWORD_REQUEST_TYPE = {
    current_password: string,
    new_password: string
}

export type CHANGEPASSOWORD_RESPONE_TYPE = {
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
// ============== CHANGE PASSWORD ============== //
// ============== CHANGE PASSWORD ============== //


// ============== CHANGE PROFILE ============== //
// ============== CHANGE PROFILE ============== //
export type CHANGEPROFILE_REQUEST_TYPE = {
    name: string,
}

export type CHANGEPROFILE_RESPONE_TYPE = {
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
// ============== CHANGE PROFILE ============== //
// ============== CHANGE PROFILE ============== //
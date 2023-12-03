// ============== MOVIE_CATEGORY ============== //
// ============== MOVIE_CATEGORY ============== //
export type MOVIE_CATEGORY_RESPONE_TYPE = {
    timestamp: Date | string,
    success: boolean,
    error_code: string,
    data: {id: number,name: string}[]| null,
    error: {
        error_message: string,
        field: string,
        value: string
    }[] | null | string,
}
// ============== MOVIE_CATEGORY ============== //
// ============== MOVIE_CATEGORY ============== //

// ============== MOVIE_LIST ============== //
// ============== MOVIE_LIST ============== //
export type MOVIE_LIST_REQUEST_TYPE = {
    keyword?: string,
    category?: string,
    page?: string,
    limit?: string,
    sort?: string
}

export type MOVIE_LIST_RESPONE_TYPE = {
    timestamp: Date | string,
    success: boolean,
    error_code: string,
    data: {
        result_detail: {
            total_data: number,
            total_page: number,
            current_page: number,
            current_limit: number
        },
        result_data: {
            uuid:string,
            thumbnail: string,
            title: string,
            description: string,
            category_id: number,
            category_name: string,
            is_favorite: false
        }[]
    }| null,
    error: {
        error_message: string,
        field: string,
        value: string
    }[] | null | string,
}
// ============== MOVIE_LIST ============== //
// ============== MOVIE_LIST ============== //


// ============== MOVIE_LISTFAV ============== //
// ============== MOVIE_LISTFAV ============== //
export type MOVIE_LISTFAV_RESPONE_TYPE = {
    timestamp: Date | string,
    success: boolean,
    error_code: string,
    data: {
        result_detail: {
            total_data: number,
            total_page: number,
            current_page: number,
            current_limit: number
        },
        result_data: {
            uuid:string,
            thumbnail: string,
            title: string,
            description: string,
            category_id: number,
            category_name: string,
            is_favorite: false
        }[]
    }| null,
    error: {
        error_message: string,
        field: string,
        value: string
    }[] | null | string,
}
// ============== MOVIE_LISTFAV ============== //
// ============== MOVIE_LISTFAV ============== //

// ============== MOVIE_DETAIL ============== //
// ============== MOVIE_DETAIL ============== //
export type MOVIE_DETAIL_RESPONE_TYPE = {
    timestamp: Date | string,
    success: boolean,
    error_code: string,
    data: {
        uuid:string,
        thumbnail: string,
        title: string,
        description: string,
        category_id: number,
        category_name: string,
        is_favorite: false
    }| null,
    error: {
        error_message: string,
        field: string,
        value: string
    }[] | null | string,
}
// ============== MOVIE_DETAIL ============== //
// ============== MOVIE_DETAIL ============== //




// ============== MOVIE_LISTRECOMMEND ============== //
// ============== MOVIE_LISTRECOMMEND ============== //
export type MOVIE_LISTRECOMMEND_RESPONE_TYPE = {
    timestamp: Date | string,
    success: boolean,
    error_code: string,
    data: {
        result_detail: {
            total_data: number,
            total_page: number,
            current_page: number,
            current_limit: number
        },
        result_data: {
            uuid:string,
            thumbnail: string,
            title: string,
            description: string,
            category_id: number,
            category_name: string,
            is_favorite: false
        }[]
    }| null,
    error: {
        error_message: string,
        field: string,
        value: string
    }[] | null | string,
}
// ============== MOVIE_LISTRECOMMEND ============== //
// ============== MOVIE_LISTRECOMMEND ============== //

// ============== MOVIE_DELADD_FAVORITE ============== //
// ============== MOVIE_DELADD_FAVORITE ============== //
export type MOVIE_DELADD_FAVORITE_RESPONE_TYPE = {
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
// ============== MOVIE_DELADD_FAVORITE ============== //
// ============== MOVIE_DELADD_FAVORITE ============== //




// ============== MOVIE_WATCH_FAVORITE ============== //
// ============== MOVIE_WATCH_FAVORITE ============== //
export type MOVIE_WATCH_RESPONE_TYPE = {
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
// ============== MOVIE_WATCH_FAVORITE ============== //
// ============== MOVIE_WATCH_FAVORITE ============== //
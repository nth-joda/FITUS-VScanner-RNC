package com.ntikhoa.ocrreceipt.business.domain.utils

import android.Manifest


object Constants {

    const val FILE_NAME_FORMAT = "yy-MM-dd-HH-mm-ss-SSS"
    const val REQUEST_CODE_PERMISSIONS = 100
    val REQUIRED_PERMISSIONS = arrayOf(Manifest.permission.CAMERA)

    const val EXTRA_IMAGE_URI = "extra_image_uri"

    const val BASE_URL = "https://rpa-voucher-exchange.herokuapp.com"

    const val UNKNOWN_ERROR = "Unknown Error"
}
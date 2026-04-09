package com.ritense.valtimoplugins.amsterdam.emailapi.client

import java.net.URI

data class Attachment (
    val disposition: String,
    val filename: String?,
    val contentType: String?,
    val href: URI,
    val content: String? = null
)

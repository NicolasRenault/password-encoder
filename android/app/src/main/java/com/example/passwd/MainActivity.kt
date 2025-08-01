package com.example.passwd

import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.viewinterop.AndroidView

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyWebView("https://passwd.nicolasrenault.com")
        }
    }
}

@Composable
fun MyWebView(url: String) {
    AndroidView(
        modifier = Modifier.fillMaxSize(), // Make the WebView fill the entire screen
        factory = { context ->
            WebView(context).apply {
                // Configure the WebView
                webViewClient = WebViewClient() // Handles page navigation within the WebView
                settings.javaScriptEnabled = true // Enable JavaScript (optional, but often needed)
                loadUrl(url)
            }
        }
    )
}
    
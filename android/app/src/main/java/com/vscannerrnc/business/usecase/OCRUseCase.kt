package com.ntikhoa.ocrreceipt.business.usecase

import android.content.Context
import android.net.Uri
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.text.Text
import com.google.mlkit.vision.text.TextRecognition
import com.google.mlkit.vision.text.latin.TextRecognizerOptions
import com.ntikhoa.ocrreceipt.business.domain.utils.Constants
import com.ntikhoa.ocrreceipt.business.domain.utils.DataState
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.flow
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine

class OCRUseCase(val context: Context) {

    suspend operator fun invoke(imageUri: Uri): Flow<DataState<Text>> =
        flow<DataState<Text>> {
            emit(DataState.loading())

            emit(suspendCoroutine { continuation ->
                val recognizer = TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS)
                val inputImage = InputImage.fromFilePath(context, imageUri)
                recognizer.process(inputImage).addOnSuccessListener {
                    continuation.resume(DataState(data = it))
                }.addOnFailureListener {
                    continuation.resume(DataState(message = it.message))
                }
            })
        }.catch {
            emit(handleUseCaseException(it))
        }
}
package com.ntikhoa.ocrreceipt.di.chooseimage

import com.ntikhoa.ocrreceipt.business.usecase.ProcessImageUC
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.components.ActivityRetainedComponent
import dagger.hilt.android.scopes.ActivityRetainedScoped

@Module
@InstallIn(ActivityRetainedComponent::class)
object ChooseImageModule {

    @ActivityRetainedScoped
    @Provides
    fun providesProcessImgUseCase(): ProcessImageUC {
        return ProcessImageUC()
    }

}
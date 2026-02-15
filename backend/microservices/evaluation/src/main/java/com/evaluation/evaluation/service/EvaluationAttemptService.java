package com.evaluation.evaluation.service;

import com.evaluation.evaluation.model.EvaluationAttempt;
import com.evaluation.evaluation.model.StudentAnswer;

import java.util.List;

public interface EvaluationAttemptService {
    EvaluationAttempt startAttempt(Long evaluationId, Long studentId);

    EvaluationAttempt submitAnswer(Long attemptId, StudentAnswer answer, Long questionId);

    EvaluationAttempt finishAttempt(Long attemptId);

    EvaluationAttempt getAttemptById(Long attemptId);

    List<EvaluationAttempt> getAttemptsByStudentAndEvaluation(Long studentId, Long evaluationId);
}

package com.evaluation.evaluation.controller;

import com.evaluation.evaluation.model.EvaluationAttempt;
import com.evaluation.evaluation.model.StudentAnswer;
import com.evaluation.evaluation.service.EvaluationAttemptService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/attempts")
@RequiredArgsConstructor
public class EvaluationAttemptController {

    private final EvaluationAttemptService evaluationAttemptService;

    @PostMapping("/start/{evaluationId}")
    public ResponseEntity<EvaluationAttempt> startAttempt(@PathVariable Long evaluationId,
            @RequestParam Long studentId) {
        EvaluationAttempt attempt = evaluationAttemptService.startAttempt(evaluationId, studentId);
        return new ResponseEntity<>(attempt, HttpStatus.CREATED);
    }

    @PostMapping("/{attemptId}/submit-answer/{questionId}")
    public ResponseEntity<EvaluationAttempt> submitAnswer(@PathVariable Long attemptId,
            @PathVariable Long questionId,
            @RequestBody StudentAnswer answer) {
        EvaluationAttempt updatedAttempt = evaluationAttemptService.submitAnswer(attemptId, answer, questionId);
        return ResponseEntity.ok(updatedAttempt); // Returning attempt might verify the answer was linked
    }

    @PostMapping("/{attemptId}/finish")
    public ResponseEntity<EvaluationAttempt> finishAttempt(@PathVariable Long attemptId) {
        return ResponseEntity.ok(evaluationAttemptService.finishAttempt(attemptId));
    }

    @GetMapping("/{attemptId}")
    public ResponseEntity<EvaluationAttempt> getAttemptById(@PathVariable Long attemptId) {
        return ResponseEntity.ok(evaluationAttemptService.getAttemptById(attemptId));
    }

    @GetMapping("/student/{studentId}/evaluation/{evaluationId}")
    public ResponseEntity<List<EvaluationAttempt>> getAttempts(@PathVariable Long studentId,
            @PathVariable Long evaluationId) {
        return ResponseEntity.ok(evaluationAttemptService.getAttemptsByStudentAndEvaluation(studentId, evaluationId));
    }
}

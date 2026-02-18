// js/storage.js

const EXAMS_KEY = 'ielts_exams_data';
const PROGRESS_KEY = 'ielts_student_progress';

// Lấy danh sách toàn bộ đề thi
export function getAllExams() {
    const data = localStorage.getItem(EXAMS_KEY);
    return data ? JSON.parse(data) : [];
}

// Lấy 1 đề thi theo ID
export function getExamById(id) {
    const exams = getAllExams();
    return exams.find(exam => exam.id === id);
}

// Lưu đề thi mới (Admin)
export function saveExam(examData) {
    const exams = getAllExams();
    const existingIndex = exams.findIndex(e => e.id === examData.id);
    
    if (existingIndex >= 0) {
        exams[existingIndex] = examData; // Cập nhật
    } else {
        exams.push(examData); // Thêm mới
    }
    
    localStorage.setItem(EXAMS_KEY, JSON.stringify(exams));
}

// Xóa đề thi (Admin)
export function deleteExam(id) {
    let exams = getAllExams();
    exams = exams.filter(exam => exam.id !== id);
    localStorage.setItem(EXAMS_KEY, JSON.stringify(exams));
}

// Khởi tạo dữ liệu mẫu nếu chưa có
export function initSampleData(sampleJson) {
    if (getAllExams().length === 0) {
        saveExam(sampleJson);
    }
}
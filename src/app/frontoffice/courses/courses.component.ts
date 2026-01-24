import { Component } from '@angular/core';

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  progress: number;
  image: string;
  lessons: number;
  hours: number;
  students: number;
  level: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses: Course[] = [
    {
      id: 1,
      title: 'Introduction to Angular',
      description: 'Learn the fundamentals of Angular framework including components, services, and routing.',
      instructor: 'John Smith',
      duration: '8 hours',
      progress: 75,
      image: 'https://via.placeholder.com/300x200/667eea/ffffff?text=Angular',
      lessons: 24,
      hours: 8,
      students: 1250,
      level: 'Beginner'
    },
    {
      id: 2,
      title: 'Advanced CSS Techniques',
      description: 'Master modern CSS including Grid, Flexbox, animations, and responsive design.',
      instructor: 'Sarah Johnson',
      duration: '6 hours',
      progress: 45,
      image: 'https://via.placeholder.com/300x200/764ba2/ffffff?text=CSS',
      lessons: 18,
      hours: 6,
      students: 890,
      level: 'Intermediate'
    },
    {
      id: 3,
      title: 'JavaScript Fundamentals',
      description: 'Build a strong foundation in JavaScript programming concepts and best practices.',
      instructor: 'Mike Davis',
      duration: '12 hours',
      progress: 90,
      image: 'https://via.placeholder.com/300x200/f093fb/ffffff?text=JavaScript',
      lessons: 36,
      hours: 12,
      students: 2100,
      level: 'Beginner'
    },
    {
      id: 4,
      title: 'React Development',
      description: 'Learn React from scratch including hooks, state management, and modern patterns.',
      instructor: 'Emily Wilson',
      duration: '10 hours',
      progress: 30,
      image: 'https://via.placeholder.com/300x200/4facfe/ffffff?text=React',
      lessons: 30,
      hours: 10,
      students: 1560,
      level: 'Intermediate'
    },
    {
      id: 5,
      title: 'Node.js Backend',
      description: 'Create scalable backend applications with Node.js, Express, and MongoDB.',
      instructor: 'David Brown',
      duration: '14 hours',
      progress: 60,
      image: 'https://via.placeholder.com/300x200/43e97b/ffffff?text=Node.js',
      lessons: 42,
      hours: 14,
      students: 980,
      level: 'Advanced'
    },
    {
      id: 6,
      title: 'TypeScript Essentials',
      description: 'Master TypeScript and its advanced features for better JavaScript development.',
      instructor: 'Lisa Anderson',
      duration: '8 hours',
      progress: 100,
      image: 'https://via.placeholder.com/300x200/fa709a/ffffff?text=TypeScript',
      lessons: 24,
      hours: 8,
      students: 750,
      level: 'Intermediate'
    },
    {
      id: 7,
      title: 'Vue.js Complete Guide',
      description: 'Complete Vue.js guide from basics to advanced concepts including Vuex and Vue Router.',
      instructor: 'Chris Martin',
      duration: '9 hours',
      progress: 25,
      image: 'https://via.placeholder.com/300x200/4caf50/ffffff?text=Vue.js',
      lessons: 27,
      hours: 9,
      students: 620,
      level: 'Beginner'
    },
    {
      id: 8,
      title: 'Python for Data Science',
      description: 'Learn Python programming with focus on data analysis, visualization, and machine learning.',
      instructor: 'Anna Taylor',
      duration: '16 hours',
      progress: 55,
      image: 'https://via.placeholder.com/300x200/ff9800/ffffff?text=Python',
      lessons: 48,
      hours: 16,
      students: 1890,
      level: 'Intermediate'
    }
  ];

  filterCourses(filter: string): void {
    // Implementation for filtering courses
    console.log('Filtering courses by:', filter);
  }

  continueCourse(course: Course): void {
    console.log('Continuing course:', course.title);
    // Navigate to course content
  }

  viewDetails(course: Course): void {
    console.log('Viewing details for:', course.title);
    // Navigate to course details page
  }

  getCourseBadgeClass(progress: number): string {
    if (progress === 100) return 'completed';
    if (progress >= 75) return 'almost-done';
    if (progress >= 50) return 'in-progress';
    return 'started';
  }

  getCourseBadgeText(progress: number): string {
    if (progress === 100) return 'Completed';
    if (progress >= 75) return 'Almost Done';
    if (progress >= 50) return 'In Progress';
    return 'Started';
  }
}

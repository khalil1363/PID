import { Component, OnInit } from '@angular/core';

export interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  students: number;
  rating: number;
  price: number;
  status: 'published' | 'draft' | 'archived';
  image: string;
  createdAt: string;
}

@Component({
  selector: 'app-courses-management',
  templateUrl: './courses-management.component.html',
  styleUrls: ['./courses-management.component.css']
})
export class CoursesManagementComponent implements OnInit {
  courses: Course[] = [
    {
      id: 1,
      title: 'Introduction to Angular',
      instructor: 'John Smith',
      category: 'Web Development',
      students: 1250,
      rating: 4.8,
      price: 49.99,
      status: 'published',
      image: 'https://via.placeholder.com/120x80/667eea/ffffff?text=Angular',
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      title: 'Advanced CSS Techniques',
      instructor: 'Sarah Johnson',
      category: 'Web Development',
      students: 890,
      rating: 4.7,
      price: 39.99,
      status: 'published',
      image: 'https://via.placeholder.com/120x80/764ba2/ffffff?text=CSS',
      createdAt: '2023-11-20'
    },
    {
      id: 3,
      title: 'JavaScript Fundamentals',
      instructor: 'Mike Davis',
      category: 'Programming',
      students: 2100,
      rating: 4.9,
      price: 59.99,
      status: 'published',
      image: 'https://via.placeholder.com/120x80/f093fb/ffffff?text=JS',
      createdAt: '2023-09-10'
    },
    {
      id: 4,
      title: 'React Development',
      instructor: 'Emily Wilson',
      category: 'Web Development',
      students: 1560,
      rating: 4.6,
      price: 54.99,
      status: 'published',
      image: 'https://via.placeholder.com/120x80/4facfe/ffffff?text=React',
      createdAt: '2023-06-01'
    },
    {
      id: 5,
      title: 'Node.js Backend',
      instructor: 'David Brown',
      category: 'Backend',
      students: 980,
      rating: 4.5,
      price: 64.99,
      status: 'draft',
      image: 'https://via.placeholder.com/120x80/43e97b/ffffff?text=Node',
      createdAt: '2024-02-01'
    },
    {
      id: 6,
      title: 'Python for Data Science',
      instructor: 'Lisa Anderson',
      category: 'Data Science',
      students: 1890,
      rating: 4.8,
      price: 79.99,
      status: 'published',
      image: 'https://via.placeholder.com/120x80/ff9800/ffffff?text=Python',
      createdAt: '2024-01-28'
    }
  ];

  filteredCourses: Course[] = [];
  searchTerm: string = '';
  selectedCategory: string = 'all';
  selectedStatus: string = 'all';

  ngOnInit(): void {
    this.filteredCourses = [...this.courses];
  }

  get publishedCount(): number {
    return this.courses.filter(c => c.status === 'published').length;
  }

  get draftCount(): number {
    return this.courses.filter(c => c.status === 'draft').length;
  }

  get totalStudents(): number {
    return this.courses.reduce((sum, c) => sum + c.students, 0);
  }

  filterCourses(): void {
    this.filteredCourses = this.courses.filter(course => {
      const matchesSearch = this.searchTerm === '' || 
        course.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesCategory = this.selectedCategory === 'all' || course.category === this.selectedCategory;
      const matchesStatus = this.selectedStatus === 'all' || course.status === this.selectedStatus;
      
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }

  onSearch(): void {
    this.filterCourses();
  }

  onCategoryChange(): void {
    this.filterCourses();
  }

  onStatusChange(): void {
    this.filterCourses();
  }

  getStatusClass(status: string): string {
    return `status-badge ${status}`;
  }

  editCourse(course: Course): void {
    console.log('Edit course:', course);
  }

  deleteCourse(course: Course): void {
    console.log('Delete course:', course);
  }

  viewCourse(course: Course): void {
    console.log('View course:', course);
  }

  addCourse(): void {
    console.log('Add new course');
  }
}

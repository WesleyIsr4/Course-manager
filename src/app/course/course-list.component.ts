import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '/assets/image/forms.png',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 5,
        releaseDate: 'November, 2, 2019',
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '/assets/image/http.png',
        price: 45.99,
        code: 'XPS-1004',
        duration: 80,
        rating: 4,
        releaseDate: 'December, 4, 2019',
      },
    ];
  }
}

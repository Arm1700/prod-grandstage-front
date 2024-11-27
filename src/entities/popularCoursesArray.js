const popularCoursesArray = [
  {
    id: 1, 
    image:
        'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-16-400x300.jpg',
    title: 'How to Teach English Online and Get Paid',
    category:1,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '1 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 2,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  {
    id: 2,
    image:
      'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-18-400x300.jpg',
    title: 'How to Teach English Online and Get Paid',
    category:1,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  {
    id: 3,
    image:
      'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-17-400x300.jpg',
    title: 'How To Create In-Demand Online Courses',
    category:1,
    features: {
      lectures: 5,
      quizzes: 2,
      duration: '9 hour',
      skillLevel: 'B1 Levels',
      lang: 'English',
      students: 13,
      assessments: 'No',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  {
    id: 4,
    image:
        'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-14-400x300.jpg',
    title: 'Instructional Design for Learning and Development',
    category:1,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  {
    id: 5,
    image:
      'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-14-400x300.jpg',
    title: 'Eduma Course Creation for Passive Income',
    category:2,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  {
    id: 6,
    image:
      'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-18-400x300.jpg',
    title: 'How to Teach English Online and Get Paid',
    category:2,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  {
    id: 7,
    image:
      'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-17-400x300.jpg',
    title: 'How To Create In-Demand Online Courses',
    category:2,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  {
    id: 8,
    image:
        'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-18-400x300.jpg',
    title: 'Instructional Design for Learning and Development',
    category:3,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  {
    id: 9,
    image:
        'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-14-400x300.jpg',
    title: 'Instructional Design for Learning and Development',
    category:3,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  {
    id: 10,
    image:
        'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-16-400x300.jpg',
    title: 'Instructional Design for Learning and Development',
    category:3,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  }, {
    id: 11,
    image:
        'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-16-400x300.jpg',
    title: 'Instructional Design for Learning and Development',
    category:3,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  }, {
    id: 12,
    image:
        'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-16-400x300.jpg',
    title: 'Instructional Design for Learning and Development',
    category:3,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  }, {
    id: 13,
    image:
        'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-16-400x300.jpg',
    title: 'Instructional Design for Learning and Development',
    category:3,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  }, {
    id: 14,
    image:
        'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-16-400x300.jpg',
    title: 'Instructional Design for Learning and Development',
    category:3,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  }, {
    id: 15,
    image:
        'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-16-400x300.jpg',
    title: 'Instructional Design for Learning and Development',
    category:2,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  }, {
    id: 16,
    image:
        'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-16-400x300.jpg',
    title: 'Instructional Design for Learning and Development',
    category:3,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  }, {
    id: 17,
    image:
        'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-16-400x300.jpg',
    title: 'Instructional Design for Learning and Development',
    category:3,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  }, {
    id: 18,
    image:
        'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-16-400x300.jpg',
    title: 'Instructional Design for Learning and Development',
    category:4,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  }, {
    id: 19,
    image:
        'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-16-400x300.jpg',
    title: 'Instructional Design for Learning and Development',
    category:4,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  }, {
    id: 20,
    image:
        'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-14-400x300.jpg',
    title: 'Instructional Design for Learning and Development',
    category:4,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '9 hour',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  }, {
    id: 21,
    image:
        'https://eduma.thimpress.com/wp-content/uploads/2022/06/course-16-400x300.jpg',
    title: 'Instructional Design for Learning and Development',
    category:4,
    features: {
      lectures: 7,
      quizzes: 0,
      duration: '12',
      skillLevel: 'all Levels',
      lang: 'English',
      students: 8,
      assessments: 'Yes',
    },
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },










]
export default popularCoursesArray

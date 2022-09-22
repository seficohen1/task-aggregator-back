function getSeedUsers() {
  return [
    {
      firstName: "Connor",
      lastName: "Thomson",
      email: "connor@users.com",
      password: "12345678",
      role: "user",
    },
    {
      firstName: "Maria",
      lastName: "Garcia",
      email: "maria@users.com",
      password: "12345678",
      role: "user",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@users.com",
      password: "12345678",
      role: "user",
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@users.com",
      password: "12345678",
      role: "user",
    },
    {
      firstName: "Jesus",
      lastName: "Calvo",
      email: "jesus@users.com",
      password: "12345678",
      role: "user",
    },
    {
      firstName: "Sandra",
      lastName: "Sanchez",
      email: "sandra@users.com",
      password: "12345678",
      role: "user",
    },
    {
      firstName: "Assembler",
      lastName: "Admin",
      email: "assembler@admin.com",
      password: "12345678",
      role: "admin",
    },
    {
      firstName: "Jose",
      lastName: "Assembler",
      email: "jose@admin.com",
      password: "12345678",
      role: "admin",
    },
  ];
}

const getSeedTasks = () => {
  return [
    {
      title: "walk the dog",
      desciption: "not after 16:30",
      
    },
    {
      title: "Go get danny form the course",
      desciption: "22nd Street",
    },
    {
      title: "get milk and bread from the store",
    },
    {
      title: "call Donna and postpone dinner",
      desciption: "check if she could come over instead",
    },
    {
      title: "call mom",
    },
    {
      title: "fix bug in app",
      desciption: "for tomorrow morning",
    },
    {
      title: "conference meeting with the ny team",
      desciption: "make sure dog house is ready",
    },
    {
      title: "check with Julian if we can deply",
      desciption: "thursday morning",
    },
  ];
};

export { getSeedUsers, getSeedTasks };

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
      description: "not after 16:30",
      status: 'pending'
      
    },
    {
      title: "Go get danny form the course",
      description: "22nd Street",
      status: 'cancelled'
    },
    {
      title: "get milk and bread from the store",
      status: 'complete'
    },
    {
      title: "call Donna and postpone dinner",
      description: "check if she could come over instead",
      status: "in progress"
    },
    {
      title: "call mom",
      status: 'pending'
    },
    {
      title: "fix bug in app",
      description: "for tomorrow morning",
      status: 'complete'
    },
    {
      title: "conference meeting with the ny team",
      description: "make sure dog house is ready",
      status: 'cancelled'
    },
    {
      title: "check with Julian if we can deploy",
      description: "thursday morning",
      status: 'in progress'
    },
  ];
};

export { getSeedUsers, getSeedTasks };

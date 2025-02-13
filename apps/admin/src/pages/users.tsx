import { Button } from "../components/ui/button";

export function UsersPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users Management</h1>
        <Button>Add New User</Button>
      </div>
      
      {/* Placeholder for users table */}
      <div className="rounded-lg border bg-card">
        <div className="p-4 border-b">
          <div className="grid grid-cols-5 font-medium">
            <div>Name</div>
            <div>Email</div>
            <div>Role</div>
            <div>Status</div>
            <div>Actions</div>
          </div>
        </div>
        <div className="p-4">
          <div className="text-center text-muted-foreground">
            No users found
          </div>
        </div>
      </div>
    </div>
  );
}
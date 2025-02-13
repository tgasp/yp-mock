import { Button } from "../components/ui/button";

export function ContentPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Content Management</h1>
        <Button>Add New Content</Button>
      </div>
      
      {/* Content grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder for content items */}
        <div className="rounded-lg border bg-card p-4">
          <div className="aspect-video bg-accent/20 rounded-md mb-4" />
          <h3 className="text-lg font-medium mb-2">Sample Content</h3>
          <p className="text-sm text-muted-foreground mb-4">
            This is a placeholder for content items. Add real content management functionality here.
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Edit</Button>
            <Button variant="outline" size="sm">Delete</Button>
          </div>
        </div>

        {/* Empty state */}
        <div className="rounded-lg border bg-card p-4 flex items-center justify-center min-h-[200px]">
          <div className="text-center text-muted-foreground">
            <p>No content items</p>
            <p className="text-sm">Add your first content item</p>
          </div>
        </div>
      </div>
    </div>
  );
}
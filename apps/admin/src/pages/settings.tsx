import { Button } from "../components/ui/button";

export function SettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="grid gap-6 max-w-2xl">
        {/* General Settings */}
        <div className="rounded-lg border bg-card">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">General Settings</h2>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Site Name</label>
              <input
                type="text"
                className="w-full rounded-md border bg-background px-3 py-2"
                placeholder="My Admin Panel"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Site Description</label>
              <textarea
                className="w-full rounded-md border bg-background px-3 py-2"
                rows={3}
                placeholder="Enter site description"
              />
            </div>
          </div>
        </div>

        {/* Email Settings */}
        <div className="rounded-lg border bg-card">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Email Settings</h2>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">SMTP Host</label>
              <input
                type="text"
                className="w-full rounded-md border bg-background px-3 py-2"
                placeholder="smtp.example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">SMTP Port</label>
              <input
                type="number"
                className="w-full rounded-md border bg-background px-3 py-2"
                placeholder="587"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
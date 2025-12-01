import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const ACTIVITY_ITEMS = [
  { id: "a1", text: "2h ago — Added Acme Corp to pipeline" },
  { id: "a2", text: "Yesterday — Meeting notes saved for Bolt AI" },
  { id: "a3", text: "2d ago — Updated Crux Labs deal stage" },
];

const TASK_ITEMS = [
  {
    id: "t1",
    text: "Follow up with Crux Labs reference",
    meta: "Due: Tomorrow",
    done: false,
  },
  {
    id: "t2",
    text: "Review Bolt AI pitch deck",
    meta: "Due: Next week",
    done: false,
  },
  {
    id: "t3",
    text: "Send term sheet to Delta Security",
    meta: "Done",
    done: true,
  },
];

export function BottomPanel() {
  return (
    <section className="bottom-card">
      <Tabs defaultValue="activity" className="flex flex-col h-full gap-0">
        <div className="panel-header">
          <TabsList variant="line" className="h-auto gap-0 bg-transparent p-0">
            <TabsTrigger
              value="activity"
              className="h-7 text-xs px-3 rounded-none"
            >
              Activity
            </TabsTrigger>
            <TabsTrigger
              value="tasks"
              className="h-7 text-xs px-3 rounded-none"
            >
              Tasks
            </TabsTrigger>
            <TabsTrigger
              value="notes"
              className="h-7 text-xs px-3 rounded-none"
            >
              Notes
            </TabsTrigger>

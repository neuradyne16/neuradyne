import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { aiQuestionGenConfig as video } from "@/config/AIquestionGen.config";

export default function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-7 rounded-lg font-semibold transition-all 
        flex items-center justify-center gap-2
        bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 text-white shadow-lg"
          variant="outline"
        >
          {video.hero.buttons[1].text}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogTitle>{video.cta.title}</DialogTitle>
        <DialogDescription>{video.process.title}</DialogDescription>
        <DialogHeader></DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <video controls className="w-full">
              <source src="/video/AIquestionGen.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

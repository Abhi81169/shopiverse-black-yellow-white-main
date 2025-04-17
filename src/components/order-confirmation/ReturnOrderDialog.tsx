
import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter, 
  DialogDescription 
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface ReturnOrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (reason: string) => void;
}

const ReturnOrderDialog = ({ open, onOpenChange, onConfirm }: ReturnOrderDialogProps) => {
  const [returnReason, setReturnReason] = useState('');
  const [customReturnReason, setCustomReturnReason] = useState('');

  const handleConfirm = () => {
    const finalReason = returnReason === 'other' 
      ? customReturnReason 
      : returnReason;
      
    onConfirm(finalReason);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Return Order</DialogTitle>
          <DialogDescription>
            Please tell us why you're returning your order.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <RadioGroup value={returnReason} onValueChange={setReturnReason}>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="defective" id="return-defective" />
              <Label htmlFor="return-defective">Product is defective</Label>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="wrong_size" id="return-wrong-size" />
              <Label htmlFor="return-wrong-size">Wrong size/fit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="not_as_described" id="return-not-as-described" />
              <Label htmlFor="return-not-as-described">Not as described</Label>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="damaged" id="return-damaged" />
              <Label htmlFor="return-damaged">Arrived damaged</Label>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="other" id="return-other" />
              <Label htmlFor="return-other">Other reason</Label>
            </div>
          </RadioGroup>
          
          {returnReason === 'other' && (
            <div className="mt-4">
              <Label htmlFor="custom-return-reason">Please specify your reason</Label>
              <Textarea 
                id="custom-return-reason" 
                value={customReturnReason} 
                onChange={(e) => setCustomReturnReason(e.target.value)}
                placeholder="Tell us more about why you're returning..."
                className="mt-2"
              />
            </div>
          )}
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Never mind
          </Button>
          <Button 
            onClick={handleConfirm}
            disabled={returnReason === '' || (returnReason === 'other' && customReturnReason === '')}
            className="bg-destructive hover:bg-destructive/90"
          >
            Return Order
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReturnOrderDialog;

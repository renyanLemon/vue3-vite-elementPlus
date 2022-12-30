import { MarkerType, Position } from '@vue-flow/core'

export const initialElements = [
  {
    id: '1',
    type: 'input',
    label: '李四',
    position: { x: 0, y: 50 },
    sourcePosition: Position.Right,
    style: { 
      backgroundColor: 'green', 
      color: '#FFFFFF', 
      borderColor: '#aaa',
      width: '80px' 
    },
  },
  {
    id: '2',
    label: '李四',
    position: { x: 250, y: 50 },
    sourcePosition: Position.Right, 
    targetPosition: Position.Left,
    style: { backgroundColor: 'green', color: '#FFFFFF', borderColor: '#aaa' },
  },
  { 
    id: '3', 
    label: '王五', 
    position: { x: 500, y: 50 }, 
    sourcePosition: Position.Right, 
    targetPosition: Position.Left 
  },
  { 
    id: '4', 
    label: '章六', 
    type: 'output',
    position: { x: 750, y: 50 }, 
    targetPosition: Position.Left 
  },
  { 
    id: 'e1-2', 
    source: '1', 
    target: '2', 
    style: { stroke: 'green' },
    label:'通过',
    markerEnd: MarkerType.ArrowClosed
  },
  { 
    id: 'e2-3', 
    source: '2', 
    target: '3', 
    animated: true,
    label:'审批中',
    markerEnd: MarkerType.ArrowClosed
  },
  { 
    id: 'e3-4', 
    source: '3', 
    target: '4',
    markerEnd: MarkerType.ArrowClosed
  },
]
